import type { Theme } from '@mui/material/styles';
import type {
    TypographyOptions,
    TypographyUtils,
} from '@mui/material/styles/createTypography';

import { HTML_FONT_SIZE } from '@constant';

/* Custom px to rem function */
const typographyUtil: TypographyUtils = {
    pxToRem: (px: number) => `${px / HTML_FONT_SIZE}rem`,
};

const typographyStyle = (theme: Theme): TypographyOptions => ({
    fontFamily: '"Inter",sans-serif',
    htmlFontSize: HTML_FONT_SIZE,

    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

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

    body1: {
        fontSize: typographyUtil.pxToRem(16),
        fontWeight: 400,
        lineHeight: typographyUtil.pxToRem(24),

        [theme.breakpoints.up('sm')]: {
            fontSize: typographyUtil.pxToRem(17),
            lineHeight: typographyUtil.pxToRem(26),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(18),
            lineHeight: typographyUtil.pxToRem(27),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: typographyUtil.pxToRem(19),
            lineHeight: typographyUtil.pxToRem(28),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: typographyUtil.pxToRem(20),
            lineHeight: typographyUtil.pxToRem(30),
        },
    },

    subtitle1: {
        fontSize: typographyUtil.pxToRem(18),
        fontWeight: 500,
        lineHeight: typographyUtil.pxToRem(27),

        [theme.breakpoints.up('sm')]: {
            fontSize: typographyUtil.pxToRem(19),
            lineHeight: typographyUtil.pxToRem(29),
        },
        [theme.breakpoints.up('md')]: {
            fontSize: typographyUtil.pxToRem(20),
            lineHeight: typographyUtil.pxToRem(30),
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: typographyUtil.pxToRem(21),
            lineHeight: typographyUtil.pxToRem(32),
        },
        [theme.breakpoints.up('xl')]: {
            fontSize: typographyUtil.pxToRem(22),
            lineHeight: typographyUtil.pxToRem(33),
        },
    },
});

export const typography = { typographyStyle, typographyUtil };
