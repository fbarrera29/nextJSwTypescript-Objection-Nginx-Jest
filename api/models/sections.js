import { Model, raw } from 'objection'
import objectionSoftDelete from 'objection-js-soft-delete'

import Elements from './elements.js'
import Users_new from './users_new.js'

const softDelete = objectionSoftDelete.default({
  columnName: 'deleted_at',
  deletedValue: raw('CURRENT_TIMESTAMP'),
  notDeletedValue: null,
})

class Sections extends softDelete(Model) {
  static get tableName() {
    return 'sections'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        users_new_id: { type: 'integer', minLength: 0, maxLength: 255 },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
        type: { type: 'string', minLength: 1, maxLength: 255 },
      },
      required: ['name', 'description', 'type', 'users_new_id'],
    }
  }

  static get relationMappings() {
    return {
      users_new: {
        relation: Model.BelongsToOneRelation,
        modelClass: Users_new,
        join: {
          from: 'sections.users_new_id',
          to: 'users_new.id',
        },
        filter: (f) => {
          f.whereNotDeleted()
        },
      },
      elements: {
        relation: Model.HasManyRelation,
        modelClass: Elements,
        join: {
          from: 'sections.id',
          to: 'elements.section_id',
        },
        filter: (f) => {
          f.whereNotDeleted()
        },
      },
    }
  }
}

export default Sections
