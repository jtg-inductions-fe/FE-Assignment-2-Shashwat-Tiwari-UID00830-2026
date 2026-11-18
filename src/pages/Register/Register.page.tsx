/**
 * This file contains the Register component.
 */

import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    TextField,
} from '@mui/material';

import { Form, FormCard, PageRoot, Subtitle, Title } from './styles';

const Register = () => (
    <PageRoot>
        <FormCard>
            <Title variant="h3">Create Account</Title>
            <Subtitle>Sign up to start ordering</Subtitle>
            <Form>
                <TextField label="Name"></TextField>
                <TextField label="Email" type="email"></TextField>
                <TextField label="Password" type="password"></TextField>
                <FormControl>
                    <FormLabel>Type</FormLabel>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="Customer"
                        name="radio-buttons-group"
                    >
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
                    </RadioGroup>
                </FormControl>
                <Button color="secondary" variant="contained">
                    Submit
                </Button>
            </Form>
        </FormCard>
    </PageRoot>
);
export default Register;
