import { insertSeedsByEnv } from '../utils/misc.js'

const defaultData = [
  {
    id: 1,
    users_new_id: 1,
    name: 'First sections',
    description: 'First description',
    type: 'example type',
  },
  {
    id: 2,
    users_new_id: 2,
    name: 'Second sections',
    description: 'Second description',
    type: 'example type',
  },
]

const productionData = []
const stagingData = []
const testingData = []
const developmentData = []

const seed = (knex) => {
  return knex('sections')
    .del()
    .then(() =>
      knex('sections').insert(
        insertSeedsByEnv({ defaultData, developmentData, testingData, stagingData, productionData }),
      ),
    )
}

export { seed }
