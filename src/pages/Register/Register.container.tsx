/**
 * This file contains the container for the Register page.
 * It handles user lookup, store communication and navigation.
 */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import localUsers from '@/data/users.json';
import { Register } from '@/pages/Register/Register.component';
import { registerSuccess } from '@/state/slices/authSlice';
import { User } from '@/state/types/authSlice.types';
import { RegisterFormValues } from '@/validations/registerValidations';

export const RegisterContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = async (data: RegisterFormValues) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const userExists = localUsers.some(
            (user) =>
                user.email.trim().toLowerCase() ===
                data.email.trim().toLowerCase(),
        );
        if (userExists) return false;

        const newUser: User = {
            id: `r${Date.now()}`,
            name: data.name,
            email: data.email,
            role: data.role,
        };
        dispatch(registerSuccess(newUser));
        void navigate('/discover');
        return true;
    };

    return <Register onRegister={handleRegister} />;
};
