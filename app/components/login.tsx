import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { authActions } from '../store/auth';

import { _login } from '../src/api';
import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';

const Login: React.FC<{ onChangeRegistration: (value: boolean) => void }> = props => {
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const loginBackground = useColorModeValue('gray.200', 'gray.800');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useAppDispatch();

    const login = async () => {
        const response = await _login(email, password);
        if (response.success === true) {
            dispatch(authActions.login());
        } else {
            setPassword('');
            setEmail('');
        }
    };

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const onPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    return (
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <Flex direction='column' background={formBackground} p={12} rounded={6}>
                <Heading mb={6}>Log in</Heading>
                <Input placeholder='login@email.com' variant='filled' mb={3} type='email' value={email} onChange={onEmailChange} />
                <Input placeholder='******' variant='filled' mb={3} value={password} type='password' onChange={onPasswordChange} />
                <Button mb={6} background={loginBackground} onClick={login}>
                    Log in
                </Button>
                <Button mb={6} colorScheme='teal' onClick={() => props.onChangeRegistration(true)}>
                    Registration
                </Button>
                <Button onClick={toggleColorMode}>Color mode</Button>
            </Flex>
        </Flex>
    );
};

export default Login;
