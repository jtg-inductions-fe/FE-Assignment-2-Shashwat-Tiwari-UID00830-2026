/**
 * Application entry point. Mounts the React tree and sets up the
 * global providers.
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Provider } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { App } from '@/App';
import { ErrorBoundary } from '@/components/ErrorBoundary.component';
import { store } from '@/state/store';
import { theme } from '@theme';

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
