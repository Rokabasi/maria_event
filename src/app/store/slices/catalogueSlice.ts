import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api, Product } from '@/app/lib/api';

interface CatalogueState {
    products: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: CatalogueState = {
    products: [],
    loading: false,
    error: null,
};

export const fetchCatalogue = createAsyncThunk(
    'catalogue/fetchCatalogue',
    async () => {
        const data = await api.getCatalogue();
        return data;
    }
);

export const fetchCatalogueById = createAsyncThunk(
    'catalogue/fetchCatalogueById',
    async (typ_id: string) => {
        const data = await api.getCatalogueById(typ_id);
        return data;
    }
);

const catalogueSlice = createSlice({
    name: 'catalogue',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalogue.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCatalogue.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchCatalogue.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch catalogue';
            })
            .addCase(fetchCatalogueById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCatalogueById.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchCatalogueById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch catalogue by id';
            });
    },
});

export default catalogueSlice.reducer;
