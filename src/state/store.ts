/**
 * This file contains the redux store configuration
 */
import authReducer from '@/state/slices/authSlice';
import { configureStore } from '@reduxjs/toolkit';

/**
 * The application's Redux store.
 * Register each feature's reducer in the `reducer` map below,
 */
export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
