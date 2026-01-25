import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartCount = createSelector([selectCartItems], (items) =>
    items.reduce((count, item) => count + item.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (items) =>
    items.reduce((total, item) => {
        const price = parseFloat(item.price.replace('€', ''));
        return total + price * item.quantity;
    }, 0)
);
