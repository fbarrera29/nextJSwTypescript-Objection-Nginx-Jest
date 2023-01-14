import { Flex, Heading, Box, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppSelector } from '../store/hooks';
import Router from 'next/router';
import Header from './header';

interface Props {
    children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }) => {
    const isAuth = useAppSelector(state => state.auth.isAuthenticated);

    const router = useRouter();

    useEffect(() => {
        if (isAuth === false && router.route != '/') {
            Router.push('/');
        }
    }, [isAuth]);

    const pageTitle = (pageName: string) => {
        switch (pageName) {
            case '/':
                return 'login';
            case '/user':
                return 'User list';
            case '/user/[userId]':
                return 'Edit user with id';
        }
    };

    return (
        <Flex height='100vh' align='center' direction='column'>
            <Box>
                <Heading mb={6}>{pageTitle(router.route)}</Heading>
            </Box>
            <Header></Header>
            <Box>{children}</Box>
        </Flex>
    );
};

export default Wrapper;
