import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, Product } from '@/app/lib/api';

interface PopulaireState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: PopulaireState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchPopulaire = createAsyncThunk(
    'populaire/fetchPopulaire',
    async () => {
        const data = await api.getPopulaire();
        return data;
    }
);

const populaireSlice = createSlice({
    name: 'populaire',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopulaire.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPopulaire.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchPopulaire.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch populaire';
            });
    },
});

export default populaireSlice.reducer;
