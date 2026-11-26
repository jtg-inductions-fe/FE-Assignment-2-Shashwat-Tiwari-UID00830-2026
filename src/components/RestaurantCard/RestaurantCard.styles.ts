/**
 * This file contains all the styled components for the restaurant card
 */
import { Link } from 'react-router-dom';

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';

export const CardBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: theme.borders.Border,
    borderRadius: theme.customShape.borderRadius,
    backgroundColor: theme.palette.background.default,
}));

export const CardLink = styled(Link)({
    color: 'inherit',
    textDecoration: 'none',
});

export const CardImage = styled('img')({
    display: 'block',
    width: '100%',
    height: 180,
    objectFit: 'cover',
});

export const CardBody = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(1),
    padding: theme.spacing(3),
}));

export const Name = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
}));

export const Desc = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(2),
}));

export const FoodTypeLabel = styled('span', {
    shouldForwardProp: (prop) => prop !== 'isVeg',
})<{ isVeg: boolean }>(({ theme, isVeg }) => ({
    color: isVeg ? theme.palette.success.main : theme.palette.error.main,
    fontWeight: theme.typography.fontWeightMedium,
}));

export const OwnerActions = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: theme.spacing(1),
    padding: theme.spacing(1, 2),
}));
