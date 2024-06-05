import type { RootState } from '../store';
import { ProductStateModel } from '../../models/state/product-state.model';

const selectProductState: (state: RootState) => ProductStateModel = state => state.product;
export const selectProducts = (state: RootState) => selectProductState(state).products;
export const selectLoading = (state: RootState) => selectProductState(state).loading;
export const selectError = (state: RootState) => selectProductState(state).error;