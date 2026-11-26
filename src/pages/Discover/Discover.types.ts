/**
 * This file contains the type definitions of the discovery page
 */
import { User } from '@/state/types/authSlice.types';
import { Restaurant } from '@/state/types/restaurantSlice.types';

export type FoodFilter = 'all' | 'veg' | 'non-veg';

export interface DiscoverProps {
    user: User | null;
    restaurants: Restaurant[];
    onDeleteRestaurant: (id: string) => void;
}
