/**
 * This file handles the routes which are accessible without authentication
 */
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { RootState } from '@/state/store';

const PublicRoute = () => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated,
    );
    return isAuthenticated ? <Navigate to="/discover" replace /> : <Outlet />;
};

export default PublicRoute;
