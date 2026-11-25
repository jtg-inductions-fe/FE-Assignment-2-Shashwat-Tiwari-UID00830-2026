/**
 * This file contains the rendering logic and UI for the Register form.
 */
import { SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    TextField,
} from '@mui/material';

import { FormComponent } from '@/components/Form/Form.component';
import { Form } from '@/components/Form/styles';
import { RadioGroupStyles } from '@/pages/Register/styles';
import {
    RegisterFormValues,
    registerSchema,
} from '@/validations/registerValidations';

import { RegisterProps } from './Register.types';

import { zodResolver } from '@hookform/resolvers/zod';

export const Register = ({ onRegister }: RegisterProps) => {
    const {
        register,
        handleSubmit,
        setError,
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

                <FormControl>
                    <FormLabel>Role</FormLabel>
                    <RadioGroupStyles defaultValue="Customer">
                        <FormControlLabel
                            value="Customer"
                            control={<Radio {...register('role')} />}
                            label="Customer"
                        />
                        <FormControlLabel
                            value="Owner"
                            control={<Radio {...register('role')} />}
                            label="Restaurant Partner"
                        />
                    </RadioGroupStyles>
                </FormControl>

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
