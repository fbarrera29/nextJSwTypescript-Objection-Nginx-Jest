import { useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { useAppDispatch } from '../store/hooks';
import { authActions } from '../store/auth';
import LoginRegistration from '../components/loginRegistration';
import { _checkToken } from '../src/api';
import Wrapper from '../components/wrapper';
import Router from 'next/router';

const Home = () => {
    const dispatch = useAppDispatch();
    const isAuth = useAppSelector(state => state.auth.isAuthenticated);

    useEffect(() => {
        const checking = async () => {
            const response = await _checkToken();
            if (response !== false && response.data.success === true && response.data.data === 'ok') {
                dispatch(authActions.login());
            }
        };
        checking();
    }, []);

    const renderHome = () => {
        if (isAuth === true) {
            Router.push('/user');
        }
        return <LoginRegistration />;
    };

    return <Wrapper>{renderHome()}</Wrapper>;
};

export default Home;
