import { insertSeedsByEnv } from '../utils/misc.js'

const defaultData = [
  {
    id: 1,
    name: 'First name',
    surname: 'First surname',
    email:'first@email.com',
    pwd_hash: '****',
    admin: true,
  },
  {
    id: 2,
    name: 'Second name',
    surname: 'Second surname',
    email:'second@email.com',
    pwd_hash: '****',
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
