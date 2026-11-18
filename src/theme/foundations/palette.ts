import type { PaletteOptions } from '@mui/material/styles';

import { COLORS } from '@constant';

/* Custom Palette */
export const palette: PaletteOptions = {
    // TODO: Add necessary colors here
    primary: {
        main: COLORS.PRIMARY.MAIN,
        light: COLORS.PRIMARY.LIGHT,
        dark: COLORS.PRIMARY.DARK,
        contrastText: COLORS.PRIMARY.CONTRAST_TEXT,
    },
    secondary: {
        main: COLORS.SECONDARY.MAIN,
    },
    text: {
        primary: COLORS.TEXT.PRIMARY,
        secondary: COLORS.TEXT.SECONDARY,
        disabled: COLORS.TEXT.DISABLED,
    },
    success: {
        main: COLORS.SUCCESS.MAIN,
        contrastText: COLORS.SUCCESS.CONTRAST_TEXT,
    },
    error: {
        main: COLORS.ERROR.MAIN,
        contrastText: COLORS.ERROR.CONTRAST_TEXT,
    },
    warning: {
        main: COLORS.WARNING.MAIN,
        contrastText: COLORS.WARNING.CONTRAST_TEXT,
    },
    info: {
        main: COLORS.INFO.MAIN,
        contrastText: COLORS.WARNING.CONTRAST_TEXT,
    },
};
