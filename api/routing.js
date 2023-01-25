import { _checkToken, _login } from './controllers/auth.js'
import {
  _deleteUser,
  _getSingleUser,
  _getUserInfo,
  _getUsers,
  _registration,
  _updateUser,
} from './controllers/new_users.js'

export default (router) => {
  router.post('/login', _login)
  router.post('/check-token', _checkToken)
  router.post('/registration', _registration)

  router.post('/get-users', _getUsers)
  router.post('/delete-user', _deleteUser)
  router.post('/get-single-user', _getSingleUser)
  router.post('/update-user', _updateUser)
  router.post('/get-user-info', _getUserInfo)
}
