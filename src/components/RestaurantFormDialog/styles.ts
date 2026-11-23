/**
 * This file contains the styles for the Restaurant Form Dialog
 */

import { styled } from '@mui/material/styles';

export const DialogForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    paddingTop: theme.spacing(2),
}));
