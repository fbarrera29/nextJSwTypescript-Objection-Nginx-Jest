import dayjs from 'dayjs'
import { Model } from 'objection'

import Addresses from '../models/addresses.js'
import Sections from '../models/sections.js'
import Users from '../models/users.js'
import Users_new from '../models/users_new.js'
import { errorResponse, successResponse } from '../utils/responseHelper.js'

const addAddress = async (trx) => {
  return await Addresses.query(trx).insert({
    street: 'Via dalle bombole',
  })
}

const addSections = async (trx, users_new_id) => {
  //end this part of code (use this function to add section)
  return await Sections.query(trx).insert({
    users_new_id: users_new_id,
    name: 'inserted section',
    description: 'some description',
    type: 'an example of type',
  })
}

const addUser = async (trx, addressId) => {
  return await Users.query(trx).insert({
    name: 'Ezio',
    surname: 'Stimato',
    pwd_hash: 'akjshdkjahsdkjahsdk',
    address_id: addressId,
    birth_date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
    money: 0.0,
    enabled: true,
  })
}

const addUser_new = async (trx) => {
  return await Users_new.query(trx).insert({
    name: 'name',
    surname: 'surname',
    pwd_hash: 'testing_insert_pwd',
    admin: true,
  })
}

const _transaction = async (req, res) => {
  let trx
  try {
    trx = await Model.startTransaction()
    const address = await addAddress(trx)
    console.log('add address:', address)
    console.log(typeof address.id)
    const user = await addUser(trx, address.id)
    console.log('add user:', user)
    const users_new = await addUser_new(trx)
    const section = await addSections(trx, users_new.id)
    console.log('added section with id ', section.id)
    return successResponse({ data: user, res, trx })
  } catch (err) {
    return errorResponse({ err, res, trx })
  }
}

export { _transaction }
