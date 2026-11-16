import { Link } from 'react-router-dom';

import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

export const HeaderStyle = styled('header')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    minHeight: '10vh',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(2, 2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2, 5),
    },
}));

export const Logo = styled(Link)(({ theme }) => ({
    ...theme.typography.h3,
    textDecoration: 'none',
    color: 'inherit',
}));

export const ButtonStyles = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(4),
}));

export const ProfileButton = styled(IconButton)(({ theme }) => ({
    backgroundColor: theme.palette.primary.contrastText,
}));
