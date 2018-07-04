const { webPushNotification } = require('../../services/web-noti')

describe('describe webPushnotification endpoint', () => {
  it('test user getStage', () => {
    console.log('check user are in product stage')
    let user = {
      count_product: 1
    }
    expect(webPushNotification.getStage(user)).toEqual('product')
  })

  it('test', () => {
    
  })
})
