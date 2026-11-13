import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ErrorBoundary from 'theme/components/errorBoundary';

import { CssBaseline, ThemeProvider, Typography } from '@mui/material';

import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant="h1">Hello World</Typography>
            <ErrorBoundary></ErrorBoundary>
        </ThemeProvider>
    </StrictMode>,
);
