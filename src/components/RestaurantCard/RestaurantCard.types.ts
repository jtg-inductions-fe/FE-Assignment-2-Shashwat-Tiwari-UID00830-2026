/**
 * This file contains the type definitions related to Restaurant Card component.
 */

import { Restaurant } from '@/state/types/restaurantSlice.types';

export interface RestaurantCardProps {
    restaurant: Restaurant;
    onEdit?: (restaurant: Restaurant) => void;
    onDelete?: (restaurant: Restaurant) => void;
}
