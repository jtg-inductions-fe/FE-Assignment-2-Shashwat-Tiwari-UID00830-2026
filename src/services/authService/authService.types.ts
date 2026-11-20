/**
 * This file defines all the types related to authservice
 */
export interface StoredUser {
    id: string;
    name: string;
    email: string;
    password: string;
    role: 'Owner' | 'Customer';
}
