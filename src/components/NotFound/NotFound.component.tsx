/**
 * This file contains the Error 404 page component for invalid routes.
 */
import { Link } from 'react-router-dom';

import { Button, Typography } from '@mui/material';

import {
    ErrorCode,
    Message,
    Root,
} from '@/components/NotFound/NotFound.styles';

export const NotFound = () => (
    <Root>
        <ErrorCode variant="h1">404</ErrorCode>
        <Typography variant="h3">Page not found</Typography>
        <Message>The page you are looking for does not exist.</Message>
        <Button variant="contained" color="secondary" component={Link} to="/">
            Back to Home
        </Button>
    </Root>
);
