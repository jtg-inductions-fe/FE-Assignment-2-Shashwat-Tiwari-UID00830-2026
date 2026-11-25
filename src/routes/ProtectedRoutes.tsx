/**
 * This file handles the protectedRoutes which are accessible only when user is authenticated.
 */
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { DISCOVER_ROUTE } from '@/constant';
import { RootState } from '@/state/store';
import type { Role } from '@/state/types/authSlice.types';

interface ProtectedRouteProps {
    allowedRoles?: Role[];
}
export const ProtectedRoute = ({ allowedRoles }: ProtectedRouteProps) => {
    const isAuthenticated = useSelector(
        (state: RootState) => state.auth.isAuthenticated,
    );
    const role = useSelector((state: RootState) => state.auth.user?.role);
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (allowedRoles && (!role || !allowedRoles.includes(role))) {
        return <Navigate to={DISCOVER_ROUTE} replace />;
    }
    return <Outlet />;
};
