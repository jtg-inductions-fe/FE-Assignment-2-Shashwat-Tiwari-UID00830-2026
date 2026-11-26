/**
 * This file contains the Layout of the entire page.
 */
import { Outlet } from 'react-router-dom';

import { ErrorBoundary } from '@/components/ErrorBoundary.component';
import { Header } from '@/components/Header/Header.component';

export const Layout = () => (
    <>
        <Header />
        <ErrorBoundary>
            <main>
                <Outlet />
            </main>
        </ErrorBoundary>
    </>
);
