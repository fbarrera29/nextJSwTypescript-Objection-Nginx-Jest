const up = (knex) =>
  knex.schema.hasTable('users_new').then((exist) => {
    if (!exist) {
      console.log('Creating table users_new')
      return knex.schema.createTable('users_new', (table) => {
        table.increments('id').primary()
        table.string('name', 255).notNullable()
        table.string('surname', 255).notNullable()
        table.string('email', 255).notNullable()
        table.string('pwd_hash', 255).notNullable()
        table.boolean('admin').notNullable().defaultTo(false)

        // soft delete
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
        table.timestamp('deleted_at').nullable().defaultTo(null)
      })
    }
    console.log('Creating table users_new (already exists)')
  })

const down = (knex) =>
  knex.schema.hasTable('users_new').then((exist) => {
    if (exist) {
      console.log('Dropping table users_new')
      return knex.schema.dropTable('users_new')
    }
    console.log('Dropping table users_new (doesnt exist).')
  })

export { up, down }
