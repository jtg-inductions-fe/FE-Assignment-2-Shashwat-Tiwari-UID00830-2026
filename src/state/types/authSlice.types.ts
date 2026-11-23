/**
 * This file contains all the type definitions related to the auth slice
 */
export type Role = 'Customer' | 'Owner';

export interface User {
    id: string;
    name: string;
    email: string;
    role: Role;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}
