import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '@/app/lib/api';

interface TypeProduitState {
    types: any[];
    loading: boolean;
    error: string | null;
}

const initialState: TypeProduitState = {
    types: [],
    loading: false,
    error: null,
};

export const fetchTypeProduit = createAsyncThunk(
    'typeProduit/fetchTypeProduit',
    async () => {
        const data = await api.getTypeProduit();
        return data;
    }
);

const typeProduitSlice = createSlice({
    name: 'typeProduit',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTypeProduit.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchTypeProduit.fulfilled, (state, action) => {
                state.loading = false;
                state.types = action.payload;
            })
            .addCase(fetchTypeProduit.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch type produit';
            });
    },
});

export default typeProduitSlice.reducer;
