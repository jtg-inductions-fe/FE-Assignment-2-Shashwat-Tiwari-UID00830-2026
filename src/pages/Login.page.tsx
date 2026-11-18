/**
 * This file contains the Login component.
 */
import { Box, Button, Typography } from '@mui/material';

const Login = () => (
    <Box
        sx={(theme) => ({
            ...theme.mixins.flexCenter(),
            flexDirection: 'column',
            minHeight: '90vh',
        })}
    >
        <Typography variant="h1">This is the login Page</Typography>
        <Button variant="contained" color="secondary" size="large">
            Click Me!
        </Button>
    </Box>
);

export default Login;
