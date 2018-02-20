module.exports = {
  dbConfig: {
    host: '192.168.64.2',
    username: 'root',
    password: '',
    schema: 'movieclub_db'
  },
  dbTables: [
    'tb_member_role',
    'tb_member_role_user',
    'tb_log_used_point',
    'tb_package',
    'tb_user_pakage',
    'tb_coupon',
    'tb_user_coupon'

  ],
  outputPath: './src/repositories/'
}
