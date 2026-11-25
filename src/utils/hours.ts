/**
 * This file contains the store hours defaults and functions
 */

import { StoreHours } from '@/state/types/restaurantSlice.types';

/**
 * Default starting hours of a newly added Restaurant
 */
export const DEFAULT_HOURS: StoreHours = {
    openHours: '09:00',
    closeHours: '22:00',
};

/**
 * Tells whether the restaurant is open right now or not.
 * @param hours
 * @param now
 * @returns {object} an object which contains details about the opening of restaurant.
 */
export const getOpenStatus = (hours: StoreHours, now = new Date()) => {
    const time = now.toTimeString().slice(0, 5);
    const isOpen = time >= hours.openHours && time < hours.closeHours;
    return {
        isOpen,
        label: isOpen
            ? `Open now . closes ${hours.closeHours}`
            : `Closed now . opens ${hours.openHours}`,
    };
};
