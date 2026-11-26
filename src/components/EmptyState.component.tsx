/**
 * This file contains the Reusable Empty state stylings
 */
import { styled, Typography } from '@mui/material';

export const EmptyState = styled(Typography)(({ theme }) => ({
    padding: theme.spacing(8, 0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
