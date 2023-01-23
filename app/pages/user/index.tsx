import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authActions } from '../../store/auth';
import { Button, Flex } from '@chakra-ui/react';
import UserList from '../../components/userList';
import Wrapper from '../../components/wrapper';
import { _getUsers, _deleteUser } from '../../src/api';
import { usersActions } from '../../store/users';
import { useState, useEffect } from 'react';

const UsersPage = () => {
    const dispatch = useAppDispatch();
    const [page, setPage] = useState<number>(0);
    const resultsInPage = 2;

    const userList = useAppSelector(state => state.users).users;
    const isAuth = useAppSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        if (isAuth === true) {
            getUsers();
        }
    }, []);

    const getUsers = async () => {
        const response = await _getUsers(page, resultsInPage);
        if (response.data.success === true) {
            dispatch(usersActions.setUsers(response.data.data));
            setPage(page + 1);
        }
    };

    const deleteSingleUser = async (email: string) => {
        const response = await _deleteUser(email);
        if (response.data.success === true) {
            dispatch(usersActions.deleteUser(email));
        }
    };

    const logout = () => {
        dispatch(authActions.logout());
        localStorage.removeItem('token');
    };

    const vediamo = () => {
        console.log('la lista', userList);
    };
    return (
        <Wrapper>
            <Flex justifyContent='center' direction='column'>
                <UserList users={userList} getMore={getUsers} delete={deleteSingleUser}></UserList>

                <Button mt={6} onClick={logout}>
                    Log out
                </Button>
                <Button mt={6} onClick={logout}>
                    View
                </Button>
            </Flex>
        </Wrapper>
    );
};

export default UsersPage;
