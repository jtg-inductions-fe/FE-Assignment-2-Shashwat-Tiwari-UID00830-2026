/**
 * This file contains the rendering logic and UI for the Register form.
 */
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { Button, FormControlLabel, Radio, TextField } from '@mui/material';

import { FormComponent } from '@/components/Form/Form.component';
import { Form } from '@/components/Form/Form.styles';
import { RadioGroupStyles } from '@/components/Register/Register.styles';
import { RegisterProps } from '@/components/Register/Register.types';
import {
    RegisterFormValues,
    registerSchema,
} from '@/validations/registerValidations';

import { zodResolver } from '@hookform/resolvers/zod';

export const Register = ({ onRegister }: RegisterProps) => {
    const {
        register,
        handleSubmit,
        setError,
        control,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        defaultValues: {
            role: 'Customer',
        },
    });

    /**
     * This function handles the onSubmit behaviour of this form.
     * @param data
     */
    const onSubmit: SubmitHandler<RegisterFormValues> = async (data) => {
        const success = await onRegister(data);
        if (!success) {
            setError('email', {
                type: 'manual',
                message: 'An account with this email already exists',
            });
        }
    };

    return (
        <FormComponent
            title="Create Account"
            subtitle="Sign up to start ordering"
            footer={
                <>
                    Already a member? <Link to="/login">Log in</Link>
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
                    {...register('name')}
                    label="Name"
                    error={!!errors.name}
                    helperText={errors.name?.message}
                />
                <TextField
                    label="Email"
                    {...register('email')}
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

                <Controller
                    name="role"
                    control={control}
                    render={({ field }) => (
                        <RadioGroupStyles {...field}>
                            <FormControlLabel
                                value="Customer"
                                control={<Radio />}
                                label="Customer"
                            />
                            <FormControlLabel
                                value="Owner"
                                control={<Radio />}
                                label="Owner"
                            />
                        </RadioGroupStyles>
                    )}
                />

                <Button
                    disabled={isSubmitting}
                    type="submit"
                    color="secondary"
                    variant="contained"
                >
                    {isSubmitting ? 'Loading...' : 'Submit'}
                </Button>
            </Form>
        </FormComponent>
    );
};
