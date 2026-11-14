/**
 * Application entry point. Mounts the React tree and sets up the
 * global providers.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import ErrorBoundary from 'components/errorBoundary';
import { Provider } from 'react-redux';
import { store } from 'store/store';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme } from '@theme';

import App from './app';

const rootElement = document.getElementById('root') as HTMLElement;

createRoot(rootElement).render(
    <StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <ErrorBoundary>
                    <App />
                </ErrorBoundary>
            </ThemeProvider>
        </Provider>
    </StrictMode>,
);
