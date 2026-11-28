/**
 * This file contains the type definitions for the MenuItem form dialog
 */

import { MenuItem } from '@/state/types/menuSlice.types';

export interface MenuItemFormDialogProps {
    open: boolean;
    item: MenuItem | null;
    restaurantId: string;
    onClose: () => void;
    onSaved: (message: string) => void;
}
