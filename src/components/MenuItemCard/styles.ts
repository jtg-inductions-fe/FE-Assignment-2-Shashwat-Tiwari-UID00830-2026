/**
 * This file contains the styled components for the MenuItem card.
 */

import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';

import { BORDER_RADIUS } from '@/constant';

export const CardBox = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid black',
    borderRadius: BORDER_RADIUS,
}));

export const CardImage = styled('img')(() => ({
    display: 'block',
    width: '100%',
    objectFit: 'cover',
}));

export const CardBody = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    gap: theme.spacing(1),
    padding: theme.spacing(3),
}));

export const Name = styled(Typography)(({ theme }) => ({
    fontWeight: theme.typography.fontWeightMedium,
}));

export const Description = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
}));

export const FoodTypeLabel = styled('span', {
    shouldForwardProp: (prop) => prop !== 'isVeg',
})<{ isVeg: boolean }>(({ theme, isVeg }) => ({
    color: isVeg ? theme.palette.success.main : theme.palette.error.main,
    fontWeight: theme.typography.fontWeightMedium,
}));
