/**
 * This file contains the styles for the Restaurant Form Dialog
 */

import { styled } from '@mui/material/styles';

import { typography } from '@/theme/foundations';

export const DialogForm = styled('form')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(4),
    paddingTop: theme.spacing(2),
    maxheight: typography.typographyUtil.pxToRem(600),
    width: typography.typographyUtil.pxToRem(400),
    borderRadius: theme.shape.borderRadius,
}));
