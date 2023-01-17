const axios = require('axios');
const qs = require('qs');
var sha1 = require('sha1');
const { host } = require('../config');
import { SingleUser } from './models/user';

async function _login(email: string, password: string) {
    const response = await axios.post(
        host + '/api/login',
        {
            email: email,
            password: sha1(password),
        },
        {
            headers: {
                'accept-encoding': 'application/json',
            },
        },
    );
    if (response.data.success === true) {
        localStorage.setItem('token', response.data.data);
    }
    return response.data;
}

async function _checkToken() {
    const jwt = localStorage.getItem('token');
    if (jwt == null) {
        return false;
    }
    const response = await axios.post(host + '/api/check-token', { jwt: jwt });
    if (response.data.data === 'expired') {
        localStorage.removeItem('token');
    }
    return response;
}

async function _registration(data: SingleUser) {
    const response = await axios.post(host + '/api/registration', {
        name: data.name,
        surname: data.surname,
        email: data.email,
        pwd_hash: sha1(data.password),
    });
    if (response.data.success === true) {
        const login_response = await _login(data.email, data.password);
        return login_response;
    }
}

async function _getUsers(page: number, resultsInPage: number) {
    const response = await axios.post(host + '/api/get-users', {
        page: page,
        resultsInPage: resultsInPage,
    });
    return response;
}

async function _updateUser(id: string, name: string, surname: string) {
    const response = await axios.post(host + '/api/update-user', {
        user_id: id,
        name: name,
        surname: surname,
    });
    return response;
}

async function _getSingleUser(user_id: number) {
    const response = await axios.post(host + '/api/get-single-user', {
        user_id: user_id,
    });
    return response;
}

async function _deleteUser(email: string) {
    const response = await axios.post(host + '/api/delete-user', {
        email: email,
    });
    return response;
}

export { _login, _registration, _checkToken, _getUsers, _deleteUser, _getSingleUser, _updateUser };
