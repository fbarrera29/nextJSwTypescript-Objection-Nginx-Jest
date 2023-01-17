interface User {
    name: string;
    surname: string;
    email: string;
}

export interface SingleUser extends User {
    password: string;
}

export interface SingleUserError {
    name: boolean;
    surname: boolean;
    email: boolean;
    password: boolean;
}

export interface EditedUser extends User {
    id: string;
    admin: boolean;
    updated_at: string;
    created_at: string;
    deleted_at: string;
}
