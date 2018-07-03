const path = require('path')

module.exports = async function (req, res) {
  res.sendFile(path.join(__dirname + '../../../index.html')) 
}