import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import {
    addToCart as addToCartAction,
    removeFromCart as removeFromCartAction,
    updateQuantity as updateQuantityAction,
    clearCart as clearCartAction,
    CartItem,
} from '../store/slices/cartSlice';
import {
    selectCartItems,
    selectCartCount,
    selectCartTotal,
} from '../store/selectors/cartSelectors';

export function useCart() {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(selectCartItems);
    const cartCount = useAppSelector(selectCartCount);
    const cartTotal = useAppSelector(selectCartTotal);

    const addToCart = useCallback(
        (item: CartItem) => {
            dispatch(addToCartAction(item));
        },
        [dispatch]
    );

    const removeFromCart = useCallback(
        (id: string, size: string) => {
            dispatch(removeFromCartAction({ id, size }));
        },
        [dispatch]
    );

    const updateQuantity = useCallback(
        (id: string, size: string, quantity: number) => {
            dispatch(updateQuantityAction({ id, size, quantity }));
        },
        [dispatch]
    );

    const clearCart = useCallback(() => {
        dispatch(clearCartAction());
    }, [dispatch]);

    const getCartTotal = useCallback(() => cartTotal, [cartTotal]);
    const getCartCount = useCallback(() => cartCount, [cartCount]);

    return {
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartCount,
    };
}
