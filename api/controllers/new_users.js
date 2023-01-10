import { Model } from 'objection'

import Users_new from '../models/users_new.js'
import { errorResponse, successResponse } from '../utils/responseHelper.js'

const addUser_new = async (req, trx) => {
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
    trx = await Model.startTransaction()
    const new_users = await addUser_new(req, trx)
    delete new_users.pwd_hash
    return successResponse({ data: new_users, res, trx })
  } catch (err) {
    return errorResponse({ err, res, trx })
  }
}

const _getUsers = async (req, res) => {
  const { page, resultsInPage } = req.body
  try {
    const users = await Users_new.query().orderBy('id').page(page, resultsInPage)
    return successResponse({ data: users.results, res })
  } catch (err) {
    return errorResponse({ err, res })
  }
}

export { _registration, _getUsers }
