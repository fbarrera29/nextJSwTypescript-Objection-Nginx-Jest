import SingleUser from './singleUser';
import { _deleteUser, _getUsers } from '../src/api';
import { Button, Flex } from '@chakra-ui/react';
import { EditedUser } from '../src/models/user';

const UserList: React.FC<{
    users: EditedUser[];
    getMore: () => void;
    delete: (email: string) => void;
}> = props => {
    return (
        <Flex align='center' direction='column'>
            {props.users.length !== 0 && props.users.map(u => <SingleUser user={u} key={u.id} id={u.id} onDeleteUser={() => props.delete(u.email)} />)}{' '}
            <Button mt={6} onClick={() => props.getMore()}>
                Load more
            </Button>
        </Flex>
    );
};

export default UserList;
