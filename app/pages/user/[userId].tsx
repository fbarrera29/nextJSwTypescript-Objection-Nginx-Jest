import { useRouter } from 'next/router';
import { Button } from '@chakra-ui/react';
import Wrapper from '../../components/wrapper';

const UserPage = () => {
    const router = useRouter();

    const userId = router.query.userId;

    return <Wrapper>The user id is: {userId}</Wrapper>;
};

export default UserPage;
