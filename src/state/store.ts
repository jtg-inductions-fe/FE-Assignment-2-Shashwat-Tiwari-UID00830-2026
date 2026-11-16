/**
 * This file contains the redux store configuration
 */
import { configureStore } from '@reduxjs/toolkit';

/**
 * The application's Redux store.
 * Register each feature's reducer in the `reducer` map below,
 */
export const store = configureStore({
    reducer: {},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
