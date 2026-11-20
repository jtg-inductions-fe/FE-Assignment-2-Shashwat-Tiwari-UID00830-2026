/**
 * This file contains the Styled components of the of the Form component.
 */
import { typography } from 'theme/foundations/typography';

import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { BORDER_RADIUS } from '@/constant';

export const PageRoot = styled('main')(({ theme }) => ({
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
    maxWidth: typography.typographyUtil.pxToRem(600),
    height: 'auto',
    maxHeight: typography.typographyUtil.pxToRem(800),
    padding: theme.spacing(4, 3),
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5),
        border: '1px solid black',
        borderRadius: BORDER_RADIUS,
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

export const Alert = styled('div')(({ theme }) => ({
    color: theme.palette.error.main,
}));
export const Submit = styled(Button)(() => ({
    borderRadius: BORDER_RADIUS,
}));

export const FooterText = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
