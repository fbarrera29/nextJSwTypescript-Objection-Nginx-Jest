import SingleUser from './singleUser';
import { useEffect, useState } from 'react';
import { _deleteUser, _getUsers } from '../api';

const UserList = () => {
    const [users, setUsers] = useState<any[]>([]);
    useEffect(() => {
        // Your code here
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await _getUsers(0, 2);
        if (response.data.success === true) {
            setUsers(response.data.data);
        }
    };

    const deleteSingleUser = async (email: string) => {
        const response = await _deleteUser(email);
        if (response.data.success === true) {
            getUsers();
        }
    };

    return <div>{users.length !== 0 && users.map(u => <SingleUser user={u} key={u.id} onDeleteUser={deleteSingleUser} />)}</div>;
};

export default UserList;
