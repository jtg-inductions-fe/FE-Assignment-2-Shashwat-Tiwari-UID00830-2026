/**
 * This file contains the Register component.
 */

import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import {
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    TextField,
} from '@mui/material';

import FormComponent from '@/components/Form/Form.component';
import { Alert, Form, Submit } from '@/components/Form/styles';
import { RadioGroupStyles } from '@/pages/Register/styles';
import { registerSuccess } from '@/state/slices/authSlice';
import {
    RegisterFormValues,
    registerSchema,
} from '@/validations/registerValidations';
import { zodResolver } from '@hookform/resolvers/zod';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
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
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch(registerSuccess(data));
        void navigate('/discover');
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
                <TextField {...register('name')} label="Name" />
                {errors.name && <Alert>{errors.name.message}</Alert>}

                <TextField {...register('email')} label="Email" type="email" />
                {errors.email && <Alert>{errors.email.message}</Alert>}

                <TextField
                    {...register('password')}
                    label="Password"
                    type="password"
                />
                {errors.password && <Alert>{errors.password.message}</Alert>}

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

                <Submit
                    disabled={isSubmitting}
                    type="submit"
                    color="secondary"
                    variant="contained"
                >
                    {isSubmitting ? 'Loading...' : 'Submit'}
                </Submit>
            </Form>
        </FormComponent>
    );
};

export default Register;
