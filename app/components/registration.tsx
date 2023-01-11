import React, { useState } from 'react';
import { _registration } from '../src/api';
import { Button, Flex, Heading, FormControl, FormLabel, Input, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { validateEmail } from '../src/utils';
import { useAppDispatch } from '../store/hooks';
import { authActions } from '../store/auth';
import User from '../src/models/user';

const Registration: React.FC<{
    onChangeRegistration: (value: boolean) => void;
}> = props => {
    const dispatch = useAppDispatch();
    const { toggleColorMode } = useColorMode();
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const [formData, setFormData] = useState<User>({
        name: '',
        surname: '',
        email: '',
        password: '',
    });
    const [errors, setErrors] = useState({
        name: false,
        surname: false,
        email: false,
        password: false,
    });

    const formDataIsValid = () => {
        if (formData.name != '') {
            setErrors({ ...errors, name: true });
        }
        if (formData.surname != '') {
            setErrors({ ...errors, surname: true });
        }
        if (formData.password != '') {
            setErrors({ ...errors, password: true });
        }
        if (!validateEmail(formData.email)) {
            setErrors({ ...errors, email: true });
        }
    };

    const submitData = async () => {
        formDataIsValid();
        if (formData.name != '' && formData.surname != '' && formData.password != '' && validateEmail(formData.email)) {
            const registrated = await _registration(formData);
            if (registrated.success === true) {
                dispatch(authActions.login());
            }
        } else {
            console.log('not validated');
        }
        console.log({ errors });
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    return (
        <Flex height='100vh' alignItems='center' justifyContent='center'>
            <Flex direction='column' background={formBackground} p={40} rounded={6}>
                <Heading mb={6}>Registration</Heading>
                <FormControl isRequired isInvalid={errors.name === true}>
                    <FormLabel>Name</FormLabel>
                    <Input placeholder='First name' name='name' onChange={handleOnChange} />
                </FormControl>
                <FormControl isRequired isInvalid={errors.surname === true}>
                    <FormLabel>Surname</FormLabel>
                    <Input placeholder='First name' name='surname' onChange={handleOnChange} />
                </FormControl>
                <FormControl isRequired isInvalid={errors.email === true}>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' name='email' onChange={handleOnChange} />
                </FormControl>
                <FormControl isRequired isInvalid={errors.password === true}>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name='password' onChange={handleOnChange} />
                </FormControl>
                <Button mt={6} colorScheme='teal' onClick={submitData}>
                    Registration
                </Button>

                <Button mt={6} colorScheme='teal' onClick={() => props.onChangeRegistration(false)}>
                    Login
                </Button>

                <Button onClick={toggleColorMode}>Color mode</Button>
            </Flex>
        </Flex>
    );
};

export default Registration;
