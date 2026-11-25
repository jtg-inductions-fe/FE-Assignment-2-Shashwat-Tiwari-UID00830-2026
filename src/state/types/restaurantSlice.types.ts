/**
 * This file contains all the types related to the restaurant State.
 */
export type FoodType = 'veg' | 'non-veg';

export interface Restaurant {
    id: string;
    ownerId: string;
    name: string;
    cuisine: string;
    type: FoodType;
    image: string;
    rating: number;
    address: string;
    hours: StoreHours;
}

export interface RestaurantState {
    items: Restaurant[];
}

export interface StoreHours {
    openHours: string;
    closeHours: string;
}
