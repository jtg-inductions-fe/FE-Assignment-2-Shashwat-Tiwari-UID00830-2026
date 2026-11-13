import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { CssBaseline, ThemeProvider, Typography } from '@mui/material';
import ErrorBoundary from 'theme/components/errorBoundary';

import { theme } from '@theme';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Typography variant="h1">Hello World</Typography>
            <ErrorBoundary>
            </ErrorBoundary>
        </ThemeProvider>
    </StrictMode>,
);
