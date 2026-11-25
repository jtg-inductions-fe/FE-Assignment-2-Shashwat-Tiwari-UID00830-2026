/**
 * This file handles the routes which are accessible without authentication
 */
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { DISCOVER_ROUTE } from '@/constant';
import { RootState } from '@/state/store';

export const PublicRoute = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated,
    );
    return isAuthenticated ? (
        <Navigate to={DISCOVER_ROUTE} replace />
    ) : (
        <Outlet />
    );
};
