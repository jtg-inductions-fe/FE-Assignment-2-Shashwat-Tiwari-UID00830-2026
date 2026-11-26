/**
 * This file contains the rendering logic and UI for the Login form.
 */
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button, TextField } from '@mui/material';

import { FormComponent } from '@/components/Form/Form.component';
import { Form } from '@/components/Form/Form.styles';
import { LoginProps } from '@/components/Login/Login.types';
import { LoginFormValues, loginSchema } from '@/validations/loginValidations';

import { zodResolver } from '@hookform/resolvers/zod';

export const Login = ({ onLogin }: LoginProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError,
    } = useForm<LoginFormValues>({ resolver: zodResolver(loginSchema) });

    /**
     * This function handles the onSubmit functionality of the form
     * @param data
     */
    const onSubmit: SubmitHandler<LoginFormValues> = async (data) => {
        const success = await onLogin(data);
        if (!success) {
            setError('password', { message: 'Invalid email or password' });
        }
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
                <TextField
                    {...register('email')}
                    label="Email"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <TextField
                    {...register('password')}
                    label="Password"
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    color="secondary"
                    variant="contained"
                >
                    {isSubmitting ? 'Loading...' : 'Log In'}
                </Button>
            </Form>
        </FormComponent>
    );
};
