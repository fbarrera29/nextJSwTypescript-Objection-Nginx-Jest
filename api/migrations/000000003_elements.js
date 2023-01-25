const up = (knex) =>
  knex.schema.hasTable('elements').then((exist) => {
    if (!exist) {
      console.log('Creating table elements')
      return knex.schema.createTable('elements', (table) => {
        table.increments('id').primary()
        table.integer('section_id').unsigned().notNullable()
        table.foreign('section_id').references('sections.id').onUpdate('CASCADE')
        table.string('title', 255).notNullable()
        table.string('description', 255).notNullable()
        // soft delete
        table.timestamp('created_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        table.timestamp('updated_at').notNullable().defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'))
        table.timestamp('deleted_at').nullable().defaultTo(null)
      })
    }
    console.log('Creating table elements (already exists)')
  })

const down = (knex) =>
  knex.schema.hasTable('elements').then((exist) => {
    if (exist) {
      console.log('Dropping table elements')
      return knex.schema.dropTable('elements')
    }
    console.log('Dropping table elements (doesnt exist).')
  })

export { up, down }
