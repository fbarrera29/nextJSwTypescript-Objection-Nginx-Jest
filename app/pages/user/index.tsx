import { useAppDispatch } from '../../store/hooks';
import { authActions } from '../../store/auth';
import { Button, Flex } from '@chakra-ui/react';
import UserList from '../../components/userList';
import Wrapper from '../../components/wrapper';

const UsersPage = () => {
    const dispatch = useAppDispatch();

    const logout = () => {
        dispatch(authActions.logout());
        localStorage.removeItem('token');
    };
    return (
        <Wrapper>
            <Flex justifyContent='center' direction='column'>
                <UserList></UserList>

                <Button mt={6} onClick={logout}>
                    Log out
                </Button>
            </Flex>
        </Wrapper>
    );
};

export default UsersPage;
