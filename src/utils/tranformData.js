module.exports = {
  groupBy (data, field) {
    let productIds = data.map(value => value.id).reduce((result, current) => {
      if(!result.includes(current)){
        result.push(current)
      }
      return result
    },[])
    let tranformedData = []
    productIds.forEach((productId, index) => {
      let skus = data.filter(product => product.id === productId)
      let temp = skus[0]
      temp.child = skus
      tranformedData.push(temp)
    })
    return tranformedData
  }
}