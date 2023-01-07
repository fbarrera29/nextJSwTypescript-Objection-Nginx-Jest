import { Model } from 'objection'

import Users_new from '../models/users_new.js'
import { errorResponse, successResponse } from '../utils/responseHelper.js'

const addUser_new = async (req, trx) => {
  console.log(req.body)
  return await Users_new.query(trx).insert({
    name: req.body.name,
    surname: req.body.surname,
    pwd_hash: req.body.pwd_hash,
    email: req.body.email,
    admin: false,
  })
}

const _registration = async (req, res) => {
  let trx
  try {
    console.log('request: ', req)
    trx = await Model.startTransaction()
    const new_users = await addUser_new(req, trx)
    return successResponse({ data: new_users, res, trx })
  } catch (err) {
    return errorResponse({ err, res, trx })
  }
}

export { _registration }
