const up = (knex) =>
  knex.schema.hasTable('sections').then((exist) => {
    if (!exist) {
      console.log('Creating table sections')
      return knex.schema.createTable('sections', (table) => {
        table.increments('id').primary()
        table.integer('users_new_id').unsigned().notNullable()
        table.foreign('users_new_id').references('users_new.id').onUpdate('CASCADE')
        table.string('name', 255).notNullable()
        table.string('description', 255).notNullable()
        table.string('type', 255).notNullable()
        // soft delete
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
        table.timestamp('deleted_at').nullable().defaultTo(null)
      })
    }
    console.log('Creating table sections (already exists)')
  })

const down = (knex) =>
  knex.schema.hasTable('sections').then((exist) => {
    if (exist) {
      console.log('Dropping table sections')
      return knex.schema.dropTable('sections')
    }
    console.log('Dropping table sections (doesnt exist).')
  })

export { up, down }
