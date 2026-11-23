/**
 * This file contains the Login component.
 */

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { TextField } from '@mui/material';

import FormComponent from '@/components/Form/Form.component';
import { Alert, Form, Submit } from '@/components/Form/styles';
import { authenticate } from '@/services/authService/authService';
import { loginSuccess } from '@/state/slices/authSlice';
import { LoginFormValues, loginSchema } from '@/validations/loginValidations';
import { zodResolver } from '@hookform/resolvers/zod';

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

    /**
     * This functions handles the onSubmit functionality of the form
     * @param data
     */
    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const user = authenticate(data.email, data.password);
        if (!user) {
            setError('password', { message: 'Invalid email or password' });
            return;
        }
        dispatch(loginSuccess(user));
        void navigate('/discover');
    };

    return (
        <FormComponent
            title="Welcome Back"
            subtitle="Log in to continue"
            footer={
                <>
                    New here? <Link to="/register">Sign up</Link>
                </>
            }
        >
            <Form
                onSubmit={(event) => {
                    void handleSubmit(onSubmit)(event);
                }}
                noValidate
            >
                <TextField {...register('email')} label="Email" type="email" />
                {errors.email && <Alert>{errors.email.message}</Alert>}

                <TextField
                    {...register('password')}
                    label="Password"
                    type="password"
                />
                {errors.password && <Alert>{errors.password.message}</Alert>}

                <Submit
                    disabled={isSubmitting}
                    type="submit"
                    color="secondary"
                    variant="contained"
                >
                    {isSubmitting ? 'Loading...' : 'Log In'}
                </Submit>
            </Form>
        </FormComponent>
    );
};

export default Login;
