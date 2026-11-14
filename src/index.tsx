import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ErrorBoundary from 'components/errorBoundary';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@theme';

import App from './app';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </ThemeProvider>
    </StrictMode>,
);
