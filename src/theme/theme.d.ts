import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        borders: {
            Border: string;
        };
    }

    interface ThemeOptions {
        borders?: {
            Border?: string;
        };
    }
}

export declare module '@mui/material/styles/createMixins' {
    interface Mixins {
        lineClamp: (lines: number) => CSSProperties;
        flexCenter: () => CSSProperties;
    }
}
