/**
 * This module contains the authentication slice of the redux toolkit.
 */
import { AuthState, User } from '@/state/types/authSlice.types';
import {
    loadFromStorage,
    removeFromStorage,
    saveToStorage,
} from '@/utils/storage';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const savedUser = loadFromStorage('user', null);

const initialState: AuthState = {
    user: savedUser,
    isAuthenticated: Boolean(savedUser),
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        registerSuccess: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            saveToStorage('user', action.payload);
        },

        loginSuccess: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
            state.isAuthenticated = true;
            saveToStorage('user', action.payload);
        },

        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
            removeFromStorage('user');
        },
    },
});

export const { registerSuccess, loginSuccess, logout } = authSlice.actions;

export default authSlice.reducer;
