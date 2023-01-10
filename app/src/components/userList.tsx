import SingleUser from './singleUser';
import { useEffect, useState } from 'react';
import { _deleteUser, _getUsers } from '../api';
import { Button, Flex } from '@chakra-ui/react';

const UserList = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [page, setPage] = useState<number>(0);
    const resultsInPage = 2;

    useEffect(() => {
        // Your code here
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await _getUsers(page, resultsInPage);
        if (response.data.success === true) {
            setUsers(users.concat(response.data.data));
            setPage(page + 1);
        }
    };

    const deleteSingleUser = async (email: string) => {
        const response = await _deleteUser(email);
        if (response.data.success === true) {
            getUsers();
        }
    };

    return (
        <Flex align='center' direction='column'>
            {users.length !== 0 && users.map(u => <SingleUser user={u} key={u.id} onDeleteUser={deleteSingleUser} />)}{' '}
            <Button mt={6} onClick={getUsers}>
                Load more
            </Button>
        </Flex>
    );
};

export default UserList;
