/**
 * This file contains the container for the Login page.
 * It handles authentication, store communication and navigation.
 */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { Login } from '@/components/Login/Login.component';
import { authenticate } from '@/services/authService/authService';
import { loginSuccess } from '@/state/slices/authSlice';
import { LoginFormValues } from '@/validations/loginValidations';

export const LoginContainer = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogin = async (data: LoginFormValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const user = authenticate(data.email, data.password);
        if (!user) return false;
        dispatch(loginSuccess(user));
        void navigate('/discover');
        return true;
    };

    return <Login onLogin={handleLogin} />;
};
