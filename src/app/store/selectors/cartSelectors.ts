import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartCount = createSelector([selectCartItems], (items) =>
    items.reduce((count, item) => count + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
    items.reduce((total, item) => {
        // Extraire le nombre du prix (supporte $59.99, 59.99€, 59.99, etc.)
        const priceString = item.price.replace(/[^0-9.]/g, '');
        const price = parseFloat(priceString) || 0;
        return total + price * item.quantity;
    }, 0)
);
