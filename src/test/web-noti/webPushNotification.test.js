const { webPushNotification } = require('../../services/web-noti')
const libFirestore  = require('../../library/firestore')
// let { getActiveUser } = require('../../library/firestore/index')
import * as test from '../../library/firestore'

describe('describe webPushnotification endpoint', () => {
  it('test user getStage', () => {
    console.log('check user are in product stage')
    let user = {
      count_product: 1
    }
    expect(webPushNotification.getStage(user)).toEqual('product')
  })

  it('sent null data to transferData', () => {
    let output = {
      storeId: '',
      playerId: '',
      isAllow: false,
      isComplete: false,
      stage: 'product',
      creatAt: '',
      updateAt: '',
      dataOneSignal: {},
      dataSellsuki: {}
    }
    expect(webPushNotification.transferData('', '', null, null, '', '', '', null, null)).toEqual(output)
  })

  it('sent data to transferData', () => {
    let data = webPushNotification.transferData('01', '01', false, false, '', 'today', '', {test: 'test'}, {test: 'test'})

    let output = {
      storeId: '01',
      playerId: '01',
      isAllow: false,
      isComplete: false,
      stage: 'product',
      creatAt: 'today',
      updateAt: '',
      dataOneSignal: {test: 'test'},
      dataSellsuki: {test: 'test'}
    }
    expect(data).toEqual(output)
  })
  it.only('', async () => {
    test.getActiveUser = jest.fn().mockReturnValue(true)
    // libFirestore.getActiveUser = jest.fn().mockReturnValue(true)
    // getActiveUser = jest.fn().mockReturnValue(true)
    // console.log(libFirestore.getActiveUser())
    let result = await webPushNotification.getUserNotComplete()
    console.log(result)
    expect(1).toBe(1)
  })
})
