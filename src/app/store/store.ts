import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import nouveautesReducer from './slices/nouveautesSlice';
import populaireReducer from './slices/populaireSlice';
import randomReducer from './slices/randomSlice';
import catalogueReducer from './slices/catalogueSlice';
import productDetailReducer from './slices/productDetailSlice';
import newestReducer from './slices/newestSlice';
import typeProduitReducer from './slices/typeProduitSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        nouveautes: nouveautesReducer,
        populaire: populaireReducer,
        random: randomReducer,
        catalogue: catalogueReducer,
        productDetail: productDetailReducer,
        newest: newestReducer,
        typeProduit: typeProduitReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
