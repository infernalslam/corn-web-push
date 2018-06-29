const { getFilterUser, updateData }  = require('../../library/firestore')
const { getUser } = require('../../library/sellsuki')
const { sendNotification }  = require('../../library/onesignal')

const { STAGE, ONESIGNAL } = require('../../config/constant')

module.exports = {
  getUserNotComplete: function () {
    var data = getFilterUser('isComplete', '==', false)
    return data
  },

  getStringStore: function (userNotDone) {
    var str = ''
    var isFirst = true
    userNotDone.forEach((collections) => {
      if (isFirst) {
        str += collections.data().storeId
        isFirst = false
      } else {
        str += ',' + collections.data().storeId
      }
    })
    return str
  },

  getUserFromSellsuki: async function (store) {
    // console.log('store ', store)
    var user = await getUser(store)
    // console.log('user ', user.data.results)
    return user.data.results
  },
  getStage: function (user) {
    let stage = ''
  
    if (user.count_product <= 1) {
      stage = STAGE.PRODUCT
    } else if (user.count_store_payment_channel === 0) {
      stage = STAGE.PAYMENT
    } else if (user.count_store_shipping_type <= 1) {
      stage = STAGE.SHIPPING
    }
    return stage
  },

  updateDataToFireStore: function (user, stage, date) {
    isComplete = false

    if (stage === '') {
      stage = '3'
      isComplete = true
    }

    let data = { dataSellsuki: user, 
      stage: stage, 
      updateAt: date, 
      isComplete: isComplete 
    }

    updateData( user.store_id, data )
  
  },
  pushNotification: async function (user) {
    let heading, content
    // var url = ''
    if (user.data().dataOneSignal.language === 'th') {
      if (user.data().stage === STAGE.PRODUCT) {
        heading = 'อยากเริ่มขาย ต้องเพิ่มสินค้าก่อนนะ!'
        content = 'เริ่มการขายผ่าน Sellsuki โดยการเพิ่มสินค้าในสต๊อกสินค้า'
      } else if (user.data().stage === STAGE.SHIPPING) {
        heading = 'เพิ่มช่องทางชำระเงินสำหรับลูกค้าหรือยัง?'
        content = 'เพิ่มบัญชีธนาคารหรือช่องทางอื่นๆ เพื่อรับชำระเงินจากลูกค้าหลังยืนยันออเดอร์'
      } else if (user.data().stage === STAGE.PAYMENT) {
        heading = 'อย่าลืมเพิ่มวิธีจัดส่งและค่าส่งสินค้าด้วยนะ'
        content = 'เพิ่มวิธีจัดส่งสินค้าพร้อมค่าจัดส่งแบบต่างๆ ให้ลูกค้าเลือกรับของได้ตามสะดวก'
      }
    } else {
      if (user.data().stage === STAGE.PRODUCT) {
        heading = 'Ready to sell? let’s add your products first!'
        content = 'Add products into Sellsuki inventory to run your online store.'
      } else if (user.data().stage === STAGE.SHIPPING) {
        heading = 'Have you added payment methods?'
        content = 'Provide your payment methods for money receiving.'
      } else if (user.data().stage === STAGE.PAYMENT) {
        heading = 'Do not forget adding delivery options.'
        content = 'More delivery options, more customer satisfaction.'
      }
    }

    var message = {
      app_id: ONESIGNAL.APP_ID,
      headings: { 'en': heading },
      contents: { 'en': content },
      include_player_ids: [ user.data().playerId ]
    }
    sendNotification(message)
    return true
  },
}