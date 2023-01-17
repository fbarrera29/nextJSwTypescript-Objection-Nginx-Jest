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

const updateUser = async (req, trx) => {
  return await Users_new.query(trx).patch({ name: req.body.name, surname: req.body.surname }).findById(req.body.user_id)
}

const getUser = async (req) => {
  const user = await Users_new.query().findById(req.body.user_id)
  delete user.pwd_hash
  return user
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
    const users = await Users_new.query().where('deleted_at', 'is', null).orderBy('id').page(page, resultsInPage)
    return successResponse({ data: users.results, res })
  } catch (err) {
    return errorResponse({ err, res })
  }
}

const _updateUser = async (req, res) => {
  let trx
  try {
    trx = await Model.startTransaction()
    const updated_user = await updateUser(req, trx)
    const user = await getUser(req)
    return successResponse({ data: user, res, trx })
  } catch (err) {
    return errorResponse({ err, res, trx })
  }
}

const _getSingleUser = async (req, res) => {
  try {
    const user = await getUser(req)
    return successResponse({ data: user, res })
  } catch (err) {
    return errorResponse({ err, res })
  }
}

const _deleteUser = async (req, res) => {
  let trx
  try {
    trx = await Model.startTransaction()
    const deleted_user = await Users_new.query(trx).delete().where('email', '=', req.body.email)
    return successResponse({ data: deleted_user, res, trx })
  } catch (err) {
    return errorResponse({ err, res, trx })
  }
}

export { _registration, _getUsers, _deleteUser, _getSingleUser, _updateUser }
