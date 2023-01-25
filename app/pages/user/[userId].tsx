import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Wrapper from '../../components/wrapper';
import { _getSingleUser, _getUserInfo, _updateUser } from '../../src/api';
import { EditedUser, SingleUserError } from '../../src/models/user';
import { getEditedUser, getSingleFromEdited, getSingleUserError, validateEmail } from '../../src/utils';
import UserForm from '../../components/UserForm';
import { Button } from '@chakra-ui/react';
import { Section } from '../../src/models/section';
import SectionLabel from '../../components/section';

const UserPage = () => {
    const [user, setUser] = useState<EditedUser>(getEditedUser());
    const [sections, setSections] = useState<Section[]>([]);
    const [errors, setErrors] = useState<SingleUserError>(getSingleUserError());

    const router = useRouter();

    const userId = parseInt(router.query.userId as string);

    const getUserInfo = async () => {
        const userInfo = await _getUserInfo(userId);
        setSections(userInfo.data.sections);
        delete userInfo.data.sections;
        setUser(userInfo.data);
    };

    useEffect(() => {
        getUserInfo();
    }, []);

    const formDataIsValid = () => {
        if (user.name != '') {
            setErrors({ ...errors, name: true });
        }
        if (user.surname != '') {
            setErrors({ ...errors, surname: true });
        }
        if (!validateEmail(user.email)) {
            setErrors({ ...errors, email: true });
        }
    };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [event.target.name]: event.target.value });
    };

    const updateUser = async () => {
        formDataIsValid();
        if (user.name != '' && user.surname != '' && validateEmail(user.email)) {
            const response = await _updateUser(user.id, user.name, user.surname);
        }
    };

    return (
        <Wrapper>
            The user id is: {userId}
            <UserForm errors={errors} onChange={handleOnChange} user={getSingleFromEdited(user)} registration={false}></UserForm>
            <Button mt={6} mb={6} onClick={updateUser}>
                Update user
            </Button>
            <SectionLabel sections={sections} />
        </Wrapper>
    );
};

export default UserPage;
