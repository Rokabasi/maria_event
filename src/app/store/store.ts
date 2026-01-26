import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import nouveautesReducer from './slices/nouveautesSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        nouveautes: nouveautesReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
