import { Model, raw } from 'objection'
import objectionSoftDelete from 'objection-js-soft-delete'

import Sections from './sections.js'

const softDelete = objectionSoftDelete.default({
  columnName: 'deleted_at',
  deletedValue: raw('CURRENT_TIMESTAMP'),
  notDeletedValue: null,
})

class Users_new extends softDelete(Model) {
  static get tableName() {
    return 'users_new'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        name: { type: 'string', minLength: 1, maxLength: 255 },
        surname: { type: 'string', minLength: 1, maxLength: 255 },
        email: { type: 'string', minLength: 1, maxLength: 255 },

        pwd_hash: { type: 'string', minLength: 1, maxLength: 255 },
        admin: { type: 'boolean' },
      },
      required: ['name', 'surname','email', 'pwd_hash', 'admin'],
    }
  }

  static get relationMappings() {
    return {
      sections: {
        relation: Model.HasManyRelation,
        modelClass: Sections,
        join: {
          from: 'users_new.id',
          to: 'sections.users_new_id',
        },
        filter: (f) => {
          f.whereNotDeleted()
        },
      },
    }
  }
}

export default Users_new
