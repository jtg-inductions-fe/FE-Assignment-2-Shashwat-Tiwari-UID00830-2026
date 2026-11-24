/**
 * This file contains the type definitions for the menu slice
 */

export interface MenuItem {
    id: string;
    restaurantId: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    type: 'veg' | 'non-veg';
    stock: number;
}

export interface MenuState {
    items: MenuItem[];
}
