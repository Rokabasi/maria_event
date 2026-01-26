import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, Product } from '@/app/lib/api';

interface NouveautesState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: NouveautesState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchNouveautes = createAsyncThunk(
    'nouveautes/fetchNouveautes',
    async () => {
        const data = await api.getNouveautes();
        return data;
    }
);

const nouveautesSlice = createSlice({
    name: 'nouveautes',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNouveautes.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchNouveautes.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchNouveautes.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch nouveautes';
            });
    },
});

export default nouveautesSlice.reducer;
