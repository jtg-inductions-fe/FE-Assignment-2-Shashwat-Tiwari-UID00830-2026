/**
 * This file handles the authentication process of the login form from the mock data.
 */
import localUsers from '@/data/users.json';
import { StoredUser } from '@/services/authService/authService.types';
/**
 * Validates the provided email and password against the available users.
 * @param email - Email entered by the user in the login form.
 * @param password - Password entered by the user in the login form.
 * @returns The matching user if credentials are valid; otherwise, null.
 */
export const authenticate = (email: string, password: string) => {
    const match = localUsers.find(
        (u) =>
            u.email.toLowerCase() === email.toLowerCase() &&
            u.password === password,
    ) as StoredUser;
    if (!match) return null;
    return match;
};
