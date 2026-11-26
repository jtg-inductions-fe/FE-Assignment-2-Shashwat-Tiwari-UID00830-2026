/**
 * This file contains the Styled components of the Form component.
 */

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const PageRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(4, 2),
    backgroundColor: theme.palette.primary.contrastText,
    height: '90vh',
}));

export const FormCard = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(5),
    width: '100%',
    maxWidth: theme.typography.pxToRem(600),
    height: 'auto',
    maxHeight: theme.typography.pxToRem(800),
    padding: theme.spacing(4, 3),
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5),
        border: theme.borders.Border,
        borderRadius: theme.shape.borderRadius,
    },
}));

export const Title = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
}));

export const Subtitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    marginBottom: theme.spacing(4),
}));

export const Form = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
    width: '80%',
}));

export const FooterText = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
