import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, Product } from '@/app/lib/api';

interface RandomState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: RandomState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchRandom = createAsyncThunk(
    'random/fetchRandom',
    async () => {
        const data = await api.getRandom();
        return data;
    }
);

const randomSlice = createSlice({
    name: 'random',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchRandom.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchRandom.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchRandom.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch random';
            });
    },
});

export default randomSlice.reducer;
