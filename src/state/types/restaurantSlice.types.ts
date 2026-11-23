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
}

export interface RestaurantState {
    items: Restaurant[];
}
