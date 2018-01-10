const ProductSku = require('./productSku')

class Product {
  constructor (rows) {
    let response = []
    rows.forEach(row => {
      response.push({
        id: row.id,
        name: row.name,
        product_code: row.product_code,
        status: row.status,
        variant_1: row.variant_1,
        variant_2: row.variant_2,
        variant_3: row.variant_3,
        gen_url: row.gen_url,
        product_photo: row.product_photo ? row.product_photo.split(':;:') : row.product_photo,
        photo_id: row.photo_id ? row.photo_id.toString().split(':;:') : row.photo_id,
        product_photo_flag: row.product_photo_flag ? row.product_photo_flag.split(':;:') : row.product_photo_flag,
        skus: new ProductSku(row.child)
      })
    })
    return response
  }
}

module.exports = Product
