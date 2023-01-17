import { Box, FormControl, FormLabel, Input, useColorModeValue, Button } from '@chakra-ui/react';
import { SingleUser } from '../src/models/user';

const UserForm: React.FC<{
    errors: { name: boolean; surname: boolean; email: boolean; password: boolean };
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    user: SingleUser;
    registration: boolean;
}> = props => {
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange(event);
    };

    return (
        <Box>
            <FormControl isRequired isInvalid={props.errors.name === true}>
                <FormLabel>Name</FormLabel>
                <Input placeholder='First name' name='name' value={props.user.name} onChange={handleOnChange} />
            </FormControl>
            <FormControl isRequired isInvalid={props.errors.surname === true}>
                <FormLabel>Surname</FormLabel>
                <Input placeholder='Surname' name='surname' value={props.user.surname} onChange={handleOnChange} />
            </FormControl>
            {props.registration === true && (
                <FormControl isRequired isInvalid={props.errors.email === true}>
                    <FormLabel>Email address</FormLabel>
                    <Input type='email' name='email' value={props.user.email} onChange={handleOnChange} />
                </FormControl>
            )}
            {props.registration === true && (
                <FormControl isRequired isInvalid={props.errors.password === true}>
                    <FormLabel>Password</FormLabel>
                    <Input type='password' name='password' value={props.user.password} onChange={handleOnChange} />
                </FormControl>
            )}
        </Box>
    );
};

export default UserForm;
