import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import nouveautesReducer from './slices/nouveautesSlice';
import populaireReducer from './slices/populaireSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        nouveautes: nouveautesReducer,
        populaire: populaireReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
