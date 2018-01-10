const Sequelize = require('sequelize')
module.exports = {
  createWhereCondition(queryBinding) {
   
    let returnedValue = {}
    queryBinding.forEach((value) => {
      console.log(value)
      if(!returnedValue[value.prefix]) {
        returnedValue[value.prefix] = {}
      }
      if(value.value !== undefined) {
        if(value.condition === 'LIKE'){
          returnedValue[value.prefix][value.field] = `${value.prefix}.${value.field} LIKE :${value.field}`
        } else if (value.condition === 'IN') {
          returnedValue[value.prefix][value.field] = `${value.prefix}.${value.field} IN (:${value.field})`
        } else if (value.condition === '=') {
          returnedValue[value.prefix][value.field] = `${value.prefix}.${value.field} = :${value.field}`
        } else if (value.condition === '!=') {
          returnedValue[value.prefix][value.field] = `${value.prefix}.${value.field} != :${value.field}`
        }
      } else {
        returnedValue[value.prefix][value.field] = true
      }
    })
    return returnedValue
  },
  createBindOption(params) {
    let bind = {}
    Object.keys(params.where).forEach((key) => {
      bind[key] = params.where[key]
    })
    Object.keys(params.otherOptions).forEach((key) => {
      bind[key] = params.otherOptions[key]
    })
    return {
      replacements: bind,
      type: Sequelize.QueryTypes.SELECT
    }
  }
}