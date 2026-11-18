/**
 * This file contains the Register component.
 */

import { SubmitHandler, useForm } from 'react-hook-form';

import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';

import {
    Alert,
    Form,
    FormCard,
    PageRoot,
    Subtitle,
    Title,
} from '@/pages/Register/styles';
import { RegisterFormValues, schema } from '@/validations/registerValidations';
import { zodResolver } from '@hookform/resolvers/zod';

const Register = () => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormValues>({ resolver: zodResolver(schema) });

    const onSubmit: SubmitHandler<RegisterFormValues> = async () => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1000));
        } catch {
            setError('email', {
                message: 'This email is already taken',
            });
        }
    };
    return (
        <PageRoot>
            <FormCard>
                <Title variant="h3">Create Account</Title>
                <Subtitle>Sign up to start ordering</Subtitle>
                <Form
                    onSubmit={(e) => void handleSubmit(onSubmit)(e)}
                    noValidate
                >
                    <TextField {...register('name')} label="Name" type="name" />
                    {errors.name && <Alert>{errors.name.message}</Alert>}
                    <TextField
                        {...register('email')}
                        label="Email"
                        type="email"
                    />
                    {errors.email && <Alert>{errors.email.message}</Alert>}
                    <TextField
                        {...register('password')}
                        label="Password"
                        type="password"
                    />
                    {errors.password && (
                        <Alert>{errors.password.message}</Alert>
                    )}
                    <FormControl>
                        <FormLabel>Role</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="Customer"
                            name="radio-buttons-group"
                        >
                            <FormControlLabel
                                value="Customer"
                                control={<Radio {...register('role')} />}
                                label="Customer"
                            />
                            <FormControlLabel
                                value="Owner"
                                control={<Radio {...register('role')} />}
                                label="Owner"
                            />
                        </RadioGroup>
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
            </FormCard>
        </PageRoot>
    );
};
export default Register;
