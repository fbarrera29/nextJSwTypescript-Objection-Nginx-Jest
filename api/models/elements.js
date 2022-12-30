import { Model, raw } from 'objection'
import objectionSoftDelete from 'objection-js-soft-delete'
import Sections from './sections'

const softDelete = objectionSoftDelete.default({
  columnName: 'deleted_at',
  deletedValue: raw('CURRENT_TIMESTAMP'),
  notDeletedValue: null,
})

class Elements extends softDelete(Model) {
  static get tableName() {
    return 'elements'
  }

  static get idColumn() {
    return 'id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        sections_id: { type: 'integer', minLength: 0, maxLength: 255 },
        title: { type: 'string', minLength: 1, maxLength: 255 },
        description: { type: 'string', minLength: 1, maxLength: 255 },
      },
      required: ['name', 'description', 'title', 'sections_id'],
    }
  }

  static get relationMappings() {
    return {
        sections: {
            relation: Model.BelongsToOneRelation,
            modelClass: Sections,
            join: {
              from: 'elements.sections_id',
              to: 'sections.id',
            },
            filter: (f) => {
              f.whereNotDeleted()
            },
          },
    }
  }
}

export default Elements
