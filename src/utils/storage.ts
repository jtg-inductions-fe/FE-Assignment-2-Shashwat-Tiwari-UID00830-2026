/**
 * This file contains the helper functions for the browser storage
 */

/**
 * Retrieves data from localStorage using the provided key.
 * If no data is found, returns the fallback value.
 * @param key - The key used to identify the stored data.
 * @param fallback - The default value returned if no data exists.
 * @returns The parsed stored data or the fallback value.
 */
export const loadFromStorage = <T>(key: string, fallback: T) => {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
};

/**
 * Saves data to localStorage by converting it into a JSON string.
 * @param key - The key used to store the data.
 * @param value - The data to be stored.
 */
export const saveToStorage = (key: string, value: unknown): void => {
    localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Removes data from localStorage using the provided key.
 * @param key - The key of the data to be removed.
 */
export const removeFromStorage = (key: string): void => {
    localStorage.removeItem(key);
};
