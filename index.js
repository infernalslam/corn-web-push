const express = require('express')
const app = express()
const router = express.Router()
const bodyParser = require('body-parser')
const routeConfig = require('./src/config/routes')

app.use(bodyParser.json({
  type: '*/*'
}))
Object.keys(routeConfig).forEach((key, index) => {
  routeConfig[key].forEach((route) => {
    const {methods ,path ,controller} = route
    console.log(methods ,path ,controller)
    router[methods.toLowerCase()](`/${key}/${path}`, catchAsyncErrors(controller))
  })
})
app.use('/api', router)
app.use((err, req,res, next) => {
  console.log(err)
  if(err.status){
    res.status(err.status).send({
      code: err.status,
      message: err.message
    })
  } else {
    res.status(500).send({
      code: 500,
      message: 'somthing went wrong'
    })
  }  
})



function catchAsyncErrors(fn) {  
  return (req, res, next) => {
    const routePromise = fn(req, res, next)
    if (routePromise.catch) {
        routePromise.catch(err => next(err))
    }
  }
}

app.listen(8005, () => console.log('app listening on port 8005!'))