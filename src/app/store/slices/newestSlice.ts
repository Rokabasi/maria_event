import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, Product } from '@/app/lib/api';

interface NewestState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: NewestState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchNewest = createAsyncThunk(
    'newest/fetchNewest',
    async () => {
        const data = await api.getNewest();
        return data;
    }
);

const newestSlice = createSlice({
    name: 'newest',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNewest.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNewest.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchNewest.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch newest products';
            });
    },
});

export default newestSlice.reducer;
