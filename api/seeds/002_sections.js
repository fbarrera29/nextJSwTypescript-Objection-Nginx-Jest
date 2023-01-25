import { insertSeedsByEnv } from '../utils/misc.js'

const defaultData = [
  {
    id: 1,
    users_new_id: 1,
    name: 'Drinking',
    description: 'I like to drink...not water but RUM!',
    type: 'passion',
  },
  {
    id: 2,
    users_new_id: 2,
    name: 'Saying strange things',
    description: 'I like very much saying great sentences like this one: "The truth is often what we make of it."',
    type: 'passion',
  },
  {
    id: 3,
    users_new_id: 1,
    name: "I'm a pirate!",
    description: 'My job is to catch everything i can and then drinking rum! (yes, i love my job)',
    type: 'job',
  },
  {
    id: 4,
    users_new_id: 3,
    name: 'Martial Arts',
    description: 'I Know Kung-Fu!',
    type: 'passion',
  },
  {
    id: 5,
    users_new_id: 3,
    name: 'The one',
    description: 'Be "the one" is my job.',
    type: 'job',
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
