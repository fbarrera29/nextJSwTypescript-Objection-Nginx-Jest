import dayjs from 'dayjs'
import jwt from 'jwt-simple'

import { jwt_secret } from '../config.js'
import Users_new from '../models/users_new.js'
import { errorResponse, successResponse } from '../utils/responseHelper.js'

const _login = async (req, res) => {
  try {
    const users = await Users_new.query().where('email', '=', req.body.email).select()
    if (users.length === 0) {
      return errorResponse({ err: 'incorrect email ', res })
    }
    if (users[0].pwd_hash !== req.body.password) {
      return errorResponse({ err: 'incorrect password', res })
    }
    const payload = {
      email: req.body.email,
      exp: dayjs().add(2, 'hours').unix(), // expiration date of the token
      iat: dayjs().unix(), // the time the token is generated
    }
    const token = jwt.encode(payload, jwt_secret)
    return successResponse({ data: token, res })
  } catch (err) {
    return errorResponse({ err, res })
  }
}

const _checkToken = async (req, res) => {
  try {
    try {
      jwt.decode(req.body.jwt, jwt_secret)
    } catch (reason) {
      return successResponse({ data: 'expired', res })
    }
    return successResponse({ data: 'ok', res })
  } catch (err) {
    return errorResponse({ statusCode: 500, err, res })
  }
}

export { _login, _checkToken }
