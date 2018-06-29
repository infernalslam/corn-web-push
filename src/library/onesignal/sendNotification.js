const { ONESIGNAL } = require('../../config/constant')

module.exports = async function (message) {
  var headers = {
    'Content-Type': 'application/json; charset=utf-8',
    'Authorization': ONESIGNAL.REST_API
  }

  var options = {
    host: 'onesignal.com',
    port: 443,
    path: '/api/v1/notifications',
    method: 'POST',
    headers: headers
  }

  var https = require('https')
  var req = https.request(options, function (res) {
    res.on('message', function (message) {
      console.log('Response:')
      console.log(JSON.parse(message))
    })
  })

  req.on('error', function (e) {
    console.log('ERROR:')
    console.log(e)
    return e
  })

  //เช็คว่ารีเทรินไรไป
  var response = req.write(JSON.stringify(message))
  req.end()

  return response
}
