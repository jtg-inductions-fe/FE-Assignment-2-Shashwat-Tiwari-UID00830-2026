import { typography } from 'theme/foundations/typography';

import { Box, FormLabel, RadioGroup, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

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
    gap: '20px',
    width: '100%',
    maxWidth: typography.typographyUtil.pxToRem(500),
    height: '100%',
    maxHeight: typography.typographyUtil.pxToRem(600),
    padding: theme.spacing(4, 3),
    backgroundColor: theme.palette.primary.contrastText,
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(5),
        border: '1px solid black',
        borderRadius: '50px',
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
}));

export const FooterText = styled(Typography)(({ theme }) => ({
    marginTop: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export const RoleLabel = styled(FormLabel)(({ theme }) => ({
    color: theme.palette.text.primary,
    marginBottom: theme.spacing(1),
}));

export const RoleOptions = styled(RadioGroup)(({ theme }) => ({
    flexDirection: 'row',
    columnGap: theme.spacing(4),
}));
