const { firestore } = require('../../library/firestore/index')
const { onesignal } = require('../../library/onesignal/index')
const { STAGE, ONESIGNAL } = require('../../config/constant')

module.exports = async function () {
  const users = await firestore.getAllowUser()
  console.log('allowUser Updated: ', users)
  users.forEach((user) => {
    var heading
    var content
    // var url = ''
    var response

    if (user.data().onesignal.language === 'th') {
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
    } else if (user.data().onesignal.language === 'en') {
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
      include_player_ids: [ playerId ]
    }
    this.updateAt(storeId)
    response = onesignal.sendNotification(message)
  })

  return response
}
