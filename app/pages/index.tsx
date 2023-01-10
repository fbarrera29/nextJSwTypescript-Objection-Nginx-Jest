import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import { useAppSelector } from '../src/store/hooks';
import { useEffect } from 'react';
import { useAppDispatch } from '../src/store/hooks';
import { authActions } from '../src/store/auth';
import LoginRegistration from '../src/components/loginRegistration';
import { _checkToken } from '../src/api';
import UserList from '../src/components/userList';

const Home = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        // Your code here
        const checking = async () => {
            const response = await _checkToken();
            if (response !== false && response.data.success === true && response.data.data === 'ok') {
                dispatch(authActions.login());
            }
        };
        checking();
    }, []);

    const logout = () => {
        dispatch(authActions.logout());
        localStorage.removeItem('token');
    };

    return (
        <Flex height='100vh' align='center' direction='column'>
            <Box>
                <Heading mb={6}>Home page </Heading>
            </Box>
            <Box>
                {isAuth == false ? (
                    <LoginRegistration />
                ) : (
                    <Flex justifyContent='center' direction='column'>
                        <UserList></UserList>

                        <Button mt={6} onClick={logout}>
                            Log out
                        </Button>
                    </Flex>
                )}
            </Box>
        </Flex>
    );
};

export default Home;
