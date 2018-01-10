class productSku {
  constructor (rows) {
    let response = []
    rows.forEach(row => {
      response.push({
        id: row.product_sku_id,
        option_1: row.option_1,
        option_2: row.option_2,
        option_3: row.option_3,
        status: row.sku_status,
        price: row.price,
        code: row.sku_code,
        photo: row.sku_photo ? row.sku_photo.split(':;:') : row.sku_photo,
        photo_id: row.sku_photo_id ? row.sku_photo_id.toString().split(':;:') : row.sku_photo_id,
        photo_flag: row.product_sku_photo_flag ? row.product_sku_photo_flag.split(':;:') : row.product_sku_photo_flag,
      })
    })
    return response
  }
}

module.exports = productSku
