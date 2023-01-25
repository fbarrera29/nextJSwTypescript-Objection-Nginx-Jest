import { insertSeedsByEnv } from '../utils/misc.js'

const defaultData = [
  {
    id: 1,
    section_id: 1,
    title: 'First title',
    description: 'First description',
  },
  {
    id: 2,
    section_id: 2,
    title: 'Second title',
    description: 'Second description',
  },
]

const productionData = []
const stagingData = []
const testingData = []
const developmentData = []

const seed = (knex) => {
  return knex('elements')
    .del()
    .then(() =>
      knex('elements').insert(
        insertSeedsByEnv({ defaultData, developmentData, testingData, stagingData, productionData }),
      ),
    )
}

export { seed }
