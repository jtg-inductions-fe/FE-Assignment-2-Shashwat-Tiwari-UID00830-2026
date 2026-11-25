/**
 * This file contains all the type definitions for menuItemCard
 */

import { MenuItem } from '@/state/types/menuSlice.types';

export interface MenuItemCardProps {
    item: MenuItem;
    onAddToCart?: (item: MenuItem) => void;
}
