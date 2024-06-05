import axios, { AxiosResponse } from 'axios';
import { ProductModel } from '../models/product.model';
import { PRODUCTS_URL } from '../constants/api.constants';
import { AppDispatch } from '../store/store';
import { addProductAction, setProductsAction, removeProductAction } from '../store/product/product.slice';

export const fetchProductsApi = async (dispatch: AppDispatch) => {
    const response: AxiosResponse<ProductModel[]> = await axios.get(PRODUCTS_URL);
    dispatch(setProductsAction(response.data)) 
};

export const createProductApi = async (dispatch: AppDispatch, product: Partial<ProductModel>) => {
    const response: AxiosResponse<ProductModel> = await axios.post(PRODUCTS_URL, product);
    dispatch(addProductAction(response.data));
};

export const deleteProductApi = async (dispatch: AppDispatch, productId: number) => {
    await axios.delete(`${PRODUCTS_URL}/${productId}`);
    dispatch(removeProductAction(productId));
};