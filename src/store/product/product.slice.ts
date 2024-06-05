import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductStateModel } from '../../models/state/product-state.model';
import { ProductModel } from '../../models/product.model';

const initialState: ProductStateModel = {
    products: JSON.parse(localStorage.getItem('products') || '[]'),
    loading: false,
    error: '',
};

const saveProductsToLocalStorage = (products: ProductModel[]) => {
    localStorage.setItem('products', JSON.stringify(products));
};

export const productsSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setProductsAction: (state, action: PayloadAction<ProductModel[]>) => {
            state.products = action.payload;
            saveProductsToLocalStorage(state.products);
        },
        addProductAction: (state, action: PayloadAction<ProductModel>) => {
            state.products.unshift(action.payload);
            saveProductsToLocalStorage(state.products);
        },
        removeProductAction: (state, action: PayloadAction<number>) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            saveProductsToLocalStorage(state.products);
        },
        setLoadingAction: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setErrorAction: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
});

export const { setProductsAction, setLoadingAction, setErrorAction, addProductAction, removeProductAction } = productsSlice.actions;

export default productsSlice.reducer;
