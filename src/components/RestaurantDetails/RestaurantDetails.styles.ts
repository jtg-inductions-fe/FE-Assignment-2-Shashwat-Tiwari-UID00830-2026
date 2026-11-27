/**
 * This file contains the styles for the Restaurant details page
 */
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';

export const PageRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(5),
    padding: theme.spacing(3, 2),
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(5, 8),
        gap: theme.spacing(6),
    },
}));

export const Banner = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: theme.customShape.borderRadius,
    boxShadow: theme.shadows[2],

    [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
        minHeight: 280,
    },
}));

export const BannerImage = styled('img')(({ theme }) => ({
    flex: '0.3',
    display: 'block',
    width: '100%',
    height: 180,
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
        height: 280,
    },
}));

export const BannerInfo = styled(Box)(({ theme }) => ({
    flex: '0.7',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    padding: theme.spacing(3),
    backgroundColor: theme.palette.secondary.main,
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

export const MenuHeader = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing(3),
}));

export const BannerActions = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: theme.spacing(3),
    marginTop: theme.spacing(2),
}));

export const Rating = styled(Typography)(() => ({
    display: 'flex',
    alignItems: 'center',
}));
