// Export du store et des types
export { store } from './store';
export type { RootState, AppDispatch } from './store';

// Export des hooks
export { useAppDispatch, useAppSelector } from './hooks';

// Export des actions du cart
export { addToCart, removeFromCart, updateQuantity, clearCart } from './slices/cartSlice';
export type { CartItem } from './slices/cartSlice';

// Export des sélecteurs
export { selectCartItems, selectCartCount, selectCartTotal } from './selectors/cartSelectors';

// Export du provider
export { default as StoreProvider } from './StoreProvider';
