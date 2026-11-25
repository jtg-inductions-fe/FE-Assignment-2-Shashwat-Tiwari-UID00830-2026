/**
 * This file contains the restaurants State.
 */

import localRestaurants from '@/data/restaurants.json';
import {
    Restaurant,
    RestaurantState,
} from '@/state/types/restaurantSlice.types';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: RestaurantState = {
    items: localRestaurants as Restaurant[],
};

const restaurantSlice = createSlice({
    name: 'restaurants',
    initialState,
    reducers: {
        addRestaurant: (state, action: PayloadAction<Restaurant>) => {
            state.items.push(action.payload);
        },
        updateRestaurant: (state, action: PayloadAction<Restaurant>) => {
            const index = state.items.findIndex(
                (r) => r.id === action.payload.id,
            );
            if (index !== -1) state.items[index] = action.payload;
        },
        deleteRestaurant: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((r) => r.id !== action.payload);
        },
    },
});

export const { addRestaurant, updateRestaurant, deleteRestaurant } =
    restaurantSlice.actions;
export default restaurantSlice.reducer;
