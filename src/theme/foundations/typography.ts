import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    /**
     * Converts a pixel value to rem units.
     * @param px - The pixel value to convert.
     * @returns The equivalent value in rem units as a string.
     */
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}` + 'rem',
};

// TODO: Add the necessary typographies here.
/**
 * Creates a typography block with various styles
 * @param theme - Theme object to access the breakpoints.
 * @returns The function returns a TypographyOptions object, which includes various typography settings,
 */
const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: 'Inter',
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,

    h1: {
        fontSize: typographyUtil.pxToRem(30),
        fontWeight: 700,
        lineHeight: typographyUtil.pxToRem(45),

        [theme.breakpoints.up('sm')]: {
            fontSize: typographyUtil.pxToRem(36),
            lineHeight: typographyUtil.pxToRem(50),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: typographyUtil.pxToRem(62.5),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: typographyUtil.pxToRem(52),
            lineHeight: typographyUtil.pxToRem(66),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: typographyUtil.pxToRem(56),
            lineHeight: typographyUtil.pxToRem(70),
        },
    },

    h2: {
        fontSize: typographyUtil.pxToRem(28),
        fontWeight: 700,
        lineHeight: typographyUtil.pxToRem(40),

        [theme.breakpoints.up('sm')]: {
            fontSize: typographyUtil.pxToRem(34),
            lineHeight: typographyUtil.pxToRem(46),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(46),
            lineHeight: typographyUtil.pxToRem(58.5),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: typographyUtil.pxToRem(48),
            lineHeight: typographyUtil.pxToRem(60),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: typographyUtil.pxToRem(52),
            lineHeight: typographyUtil.pxToRem(64),
        },
    },

    h3: {
        fontSize: typographyUtil.pxToRem(24),
        fontWeight: 700,
        lineHeight: typographyUtil.pxToRem(34),

        [theme.breakpoints.up('sm')]: {
            fontSize: typographyUtil.pxToRem(28),
            lineHeight: typographyUtil.pxToRem(38),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(34),
            lineHeight: typographyUtil.pxToRem(44),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: typographyUtil.pxToRem(36),
            lineHeight: typographyUtil.pxToRem(46),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: typographyUtil.pxToRem(40),
            lineHeight: typographyUtil.pxToRem(50),
        },
    },
});

export const typography = { typographyStyle, typographyUtil };
