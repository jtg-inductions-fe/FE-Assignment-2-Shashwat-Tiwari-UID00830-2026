/**
 * This file handles the authentication process of the login form from the mock data.
 */
import localUsers from '@/data/users.json';
import { StoredUser } from '@/services/authService/authService.types';

/**
 * Retrieves all available users by combining the predefined
 * users from the seed JSON file with users saved in local storage.
 *
 * @returns An array containing both seed users and registered users.
 */
const getAllUsers = (): StoredUser[] => {
    const registered = JSON.parse(
        localStorage.getItem('registeredUsers') ?? '[]',
    ) as StoredUser[];

    return [...(localUsers as StoredUser[]), ...registered];
};
/**
 * Validates the provided email and password against the available users.
 * @param email - Email entered by the user in the login form.
 * @param password - Password entered by the user in the login form.
 * @returns The matching user if credentials are valid; otherwise, null.
 */
export const authenticate = (email: string, password: string) => {
    const match = getAllUsers().find(
        (u) =>
            u.email.toLowerCase() === email.toLowerCase() &&
            u.password === password,
    );
    if (!match) return null;
    return match;
};
