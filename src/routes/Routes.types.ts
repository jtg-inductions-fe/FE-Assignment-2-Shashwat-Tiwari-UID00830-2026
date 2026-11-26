/**
 * This file contains the type definitions for all the routes
 */

import { Role } from '@/state/types/authSlice.types';

export interface ProtectedRouteProps {
    allowedRoles?: Role[];
}
