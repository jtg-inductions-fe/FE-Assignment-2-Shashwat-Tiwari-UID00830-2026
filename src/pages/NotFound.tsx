import { Link } from 'react-router-dom';

import { Box, Button, Typography } from '@mui/material';

const NotFound = () => (
        <Box
            sx={(theme) => ({
                ...theme.mixins.flexCenter(),
                flexDirection: 'column',
                minHeight: '100vh',
                textAlign: 'center',
                gap: 5,
            })}
        >
            <Typography variant="h1" color="primary">
                404
            </Typography>
            <Typography variant="h3">Page not found</Typography>
            <Typography color="text.primary">
                The page you are looking for does not exist.
            </Typography>
            <Button
                variant="contained"
                color="secondary"
                component={Link}
                to="/"
            >
                Back to Home
            </Button>
        </Box>
    );

export default NotFound;
