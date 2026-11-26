/**
 * This file contains the styles for the NotFound page.
 */
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const Root = styled(Box)(({ theme }) => ({
    ...theme.mixins.flexCenter(),
    flexDirection: 'column',
    minHeight: '100vh',
    textAlign: 'center',
    gap: theme.spacing(5),
}));

export const ErrorCode = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
}));

export const Message = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.primary,
}));
