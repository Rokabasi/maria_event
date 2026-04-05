import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, Product } from '@/app/lib/api';

interface ProductDetailState {
    product: Product | null;
    loading: boolean;
    error: string | null;
}

const initialState: ProductDetailState = {
    product: null,
    loading: true,
    error: null,
};

export const fetchProductById = createAsyncThunk(
    'productDetail/fetchProductById',
    async (id: string) => {
        const data = await api.getProductById(id);
        return data;
    }
);

const productDetailSlice = createSlice({
    name: 'productDetail',
    initialState,
    reducers: {
        clearProduct: (state) => {
            state.product = null;
            state.loading = true;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductById.fulfilled, (state, action) => {
                state.loading = false;
                state.product = action.payload;
            })
            .addCase(fetchProductById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch product';
            });
    },
});

export const { clearProduct } = productDetailSlice.actions;
export default productDetailSlice.reducer;
