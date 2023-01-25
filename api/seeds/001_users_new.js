import { insertSeedsByEnv } from '../utils/misc.js'

const defaultData = [
  {
    id: 1,
    name: 'Jack',
    surname: 'Sparrow',
    email: 'jack_sparrow@seven_seas.com',
    pwd_hash: 'black_pearl',
    admin: true,
  },
  {
    id: 2,
    name: 'Obi-Wan',
    surname: 'Kenobi',
    email: 'not_a_sith@jedi.com',
    pwd_hash: 'maythe4bWu',
    admin: false,
  },
  {
    id: 3,
    name: 'Thomas',
    surname: 'A. Anderson',
    email: 'neo@the_one.com',
    pwd_hash: 'm4tr1x_15_r34l!',
    admin: false,
  },
]

const productionData = []
const stagingData = []
const testingData = []
const developmentData = []

const seed = (knex) => {
  return knex('users_new')
    .del()
    .then(() =>
      knex('users_new').insert(
        insertSeedsByEnv({ defaultData, developmentData, testingData, stagingData, productionData }),
      ),
    )
}

export { seed }
