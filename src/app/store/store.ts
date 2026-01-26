import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import nouveautesReducer from './slices/nouveautesSlice';
import populaireReducer from './slices/populaireSlice';
import randomReducer from './slices/randomSlice';
import catalogueReducer from './slices/catalogueSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        nouveautes: nouveautesReducer,
        populaire: populaireReducer,
        random: randomReducer,
        catalogue: catalogueReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
