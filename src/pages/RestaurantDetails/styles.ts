/**
 * This file contains the styles for the Restaurant details page
 */
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';

import { BORDER_RADIUS } from '@/constant';

export const PageRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(6),
    padding: theme.spacing(4, 2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(5, 8),
    },
}));

export const Banner = styled(Box)({
    overflow: 'hidden',
    borderRadius: BORDER_RADIUS,
});

export const BannerImage = styled('img')(({ theme }) => ({
    display: 'block',
    width: '100%',
    height: 180,
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
        height: 280,
    },
}));

export const BannerInfo = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
}));

export const Section = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
}));

export const CategoryTitle = styled(Typography)(({ theme }) => ({
    color: theme.palette.primary.main,
}));

export const ItemGrid = styled(Box)(({ theme }) => ({
    display: 'grid',
    gap: theme.spacing(5),
    gridTemplateColumns: '1fr',
    [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(2,1fr)',
    },
    [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'repeat(3,1fr)',
    },
}));
