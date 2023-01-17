import { EditedUser, SingleUser, SingleUserError } from './models/user';

function validateEmail(email: string): any {
    return email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
}

function getEditedUser(): EditedUser {
    return { id: '', admin: false, updated_at: '', created_at: '', deleted_at: '', name: '', surname: '', email: '' };
}

function getSingleUser(): SingleUser {
    return { name: '', surname: '', email: '', password: '' };
}

function getSingleUserError(): SingleUserError {
    return {
        name: false,
        surname: false,
        email: false,
        password: false,
    };
}

function getSingleFromEdited(user: EditedUser): SingleUser {
    return {
        name: user.name,
        surname: user.surname,
        email: user.email,
        password: 'insert new password',
    };
}

export { validateEmail, getEditedUser, getSingleUser, getSingleUserError, getSingleFromEdited };
