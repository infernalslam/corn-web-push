class Bill {
  constructor (rows) {
    let response = []
    rows.forEach(row => {
      response.push({
        id: row.id,
      })
    })
    return response
  }
}

module.exports = Bill
