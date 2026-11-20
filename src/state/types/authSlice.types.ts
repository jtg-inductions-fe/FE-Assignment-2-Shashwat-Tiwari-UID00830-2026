export type Role = 'Customer' | 'Owner';

export interface User {
    name: string;
    email: string;
    role: Role;
}

export interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
}
