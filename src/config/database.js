module.exports = {
  local: {
    username: 'root',
    password: null,
    database: 'sellsukinew',
    host: '192.168.1.254',
    dialect: 'mysql'
  },
  staging: {
    username: 'suki',
    password: 'ea7dfbb24caf8ee4',
    database: 'sellsukinew',
    host: 'sellsuki-db-staging-2.cyfnmsna5xbl.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: null,
    database: 'sellsukinew',
    host: '192.168.1.254',
    dialect: 'mysql'
  },
  production: {
    username: 'sukicustomer',
    password: 'm73eBfY8M3jnMH6X',
    database: 'sellsukinew',
    host: 'sellsuki-db.cyfnmsna5xbl.ap-southeast-1.rds.amazonaws.com',
    dialect: 'mysql'
  }
}