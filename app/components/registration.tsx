import React, { useState } from 'react';
import { _registration } from '../src/api';
import { Button, Flex, useColorModeValue, Heading } from '@chakra-ui/react';
import { getSingleUser, getSingleUserError, validateEmail } from '../src/utils';
import { useAppDispatch } from '../store/hooks';
import { authActions } from '../store/auth';
import { SingleUser, SingleUserError } from '../src/models/user';
import UserForm from './UserForm';

const Registration: React.FC<{
    onChangeRegistration: (value: boolean) => void;
}> = props => {
    const dispatch = useAppDispatch();
    const formBackground = useColorModeValue('gray.100', 'gray.700');
    const [formData, setFormData] = useState<SingleUser>(getSingleUser());
    const [errors, setErrors] = useState<SingleUserError>(getSingleUserError());

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
                <UserForm errors={errors} onChange={handleOnChange} user={formData} registration={true}></UserForm>
                <Button mt={6} colorScheme='teal' onClick={submitData}>
                    Registration
                </Button>
                <Button mt={6} colorScheme='teal' onClick={() => props.onChangeRegistration(false)}>
                    Login
                </Button>
            </Flex>
        </Flex>
    );
};

export default Registration;
