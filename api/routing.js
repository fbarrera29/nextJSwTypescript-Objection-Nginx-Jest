import { _checkToken, _login } from './controllers/auth.js'
import _ping from './controllers/healthcheck.js'
import { _deleteUser, _getUsers, _registration } from './controllers/new_users.js'
import { _users, _usersWithGraph, _users_new, _users_newWithGraph } from './controllers/pagination.js'
import { _transaction } from './controllers/transaction.js'

export default (router) => {
  router.get('/healthcheck/ping', _ping)

  router.get('/demo-transaction', _transaction)

  router.get('/demo-pagination/users', _users)
  router.get('/demo-pagination/users-with-graphs', _usersWithGraph)

  router.get('/demo-pagination/users-new', _users_new)
  router.get('/demo-pagination/users-new-with-graphs', _users_newWithGraph)

  router.post('/login', _login)
  router.post('/check-token', _checkToken)
  router.post('/registration', _registration)

  router.post('/get-users', _getUsers)
  router.post('/delete-user', _deleteUser)
}
