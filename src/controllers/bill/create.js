module.exports = async function (req, res) {
  // const { limit, offset, sort, order, status, name, productCode, skuCode } = req.query
  // const productData = await getAll(parseInt(limit), parseInt(offset), sort, order, req.auth.storeId, status, name, productCode, skuCode )
  const storeId = 1
  const userId = 1
  const payload = {
    billDetail: {
      discount: 0,
      shipCost: 0,
      net: 0,
      note: '',
      shippingRefCode: '',
      type: '',
      offerType: '',
      state: '',
      storeChannelType: '',
      storeOfferId: 1,
      currencyId: 1,
      customerName: '',
      customerShippingName: '',
      customerAddress: '',
      customerSubDistrict: '',
      customerDistrictCity: '',
      customerStateProvince: '',
      customerAreaCode: '',
      customerPostCode: '',
      customerCountry: '',
      customerTel: '',
      customerEmail: '',
      customerPictureCredential: '',
      customerAreaCode: '',
      customerAreaCode: '',
      cacheShippingType,
      warehouse: ''
    },
    billItem: []
  }

  let response = {}
  res.send(response)
}
