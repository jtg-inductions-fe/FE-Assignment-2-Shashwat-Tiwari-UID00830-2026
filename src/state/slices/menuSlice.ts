import localMenu from '@/data/menu.json';
import { MenuItem, MenuState } from '@/state/types/menuSlice.types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: MenuState = {
    items: localMenu as MenuItem[],
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        addMenuItem: (state, action: PayloadAction<MenuItem>) => {
            state.items.push(action.payload);
        },
        updateMenuItem: (state, action: PayloadAction<MenuItem>) => {
            const index = state.items.findIndex(
                (m) => m.id === action.payload.id,
            );
            if (index !== -1) state.items[index] = action.payload;
        },
        deleteMenuItem: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((m) => m.id !== action.payload);
        },
        deleteMenuItemsByRestaurant: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(
                (i) => i.restaurantId !== action.payload,
            );
        },
    },
});

export const {
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    deleteMenuItemsByRestaurant,
} = menuSlice.actions;
export default menuSlice.reducer;
