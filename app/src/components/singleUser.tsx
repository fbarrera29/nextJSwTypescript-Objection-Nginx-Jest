import { Button, Card, Heading, Image, Stack, CardBody, Text, CardFooter } from '@chakra-ui/react';
import { _deleteUser } from '../api';
import User from '../models/user';

const SingleUser: React.FC<{
    user: User;
    key: number;
    onDeleteUser: (email: string) => void;
}> = props => {
    return (
        <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
            <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '200px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
            />

            <Stack>
                <CardBody>
                    <Heading size='md'>
                        {props.user.name} {props.user.surname}
                    </Heading>

                    <Text py='2'>{props.user.email}</Text>
                </CardBody>

                <CardFooter>
                    <Button variant='solid' colorScheme='blue' onClick={() => props.onDeleteUser(props.user.email)}>
                        Delete user
                    </Button>
                </CardFooter>
            </Stack>
        </Card>
    );
};

export default SingleUser;
