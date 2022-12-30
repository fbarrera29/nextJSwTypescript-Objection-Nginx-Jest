const knex_config = {
  // Fill only the fields related to the current environment
  development: {
    host: '<mysql>',
    user: '<root>',
    password: '<environment_passowrd>',
  },
  testing: {
    host: '<environment_host>',
    port: '<environement_port>',
    user: '<environment_user>',
    password: '<environment_passowrd>',
  },
  staging: {
    host: '<environment_host>',
    port: '<environement_port>',
    user: '<environment_user>',
    password: '<environment_passowrd>',
  },
  production: {
    host: '<environment_host>',
    port: '<environement_port>',
    user: '<environment_user>',
    password: '<environment_passowrd>',
  },
}
const dev_seeds = ['development', 'testing', 'staging', 'production']

const jwt_secret = '<secret_jwt>'

export { knex_config, dev_seeds, jwt_secret }
