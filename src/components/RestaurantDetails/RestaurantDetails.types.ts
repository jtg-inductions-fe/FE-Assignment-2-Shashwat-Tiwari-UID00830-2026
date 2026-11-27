/**
 * This file contains all the type definitions for the restaurant Details page
 */

import { MenuItem } from '@/state/types/menuSlice.types';
import { Restaurant } from '@/state/types/restaurantSlice.types';

export interface RestaurantDetailsProps {
    restaurant: Restaurant | undefined;
    categories: [string, MenuItem[]][];
    isCustomer: boolean;
    isOwner: boolean;
    onAddToCart: (item: MenuItem) => void;
}
