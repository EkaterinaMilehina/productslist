import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProductsApi } from '../services/product-api.service';
import { selectError, selectLoading, selectProducts } from '../store/product/product.selectors';
import { setErrorAction, setLoadingAction } from '../store/product/product.slice';

export const useProducts = () => {
    const dispatch = useDispatch();

    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        const fetchProducts = async () => {
            if (products.length === 0) {
                try {
                    dispatch(setLoadingAction(true));
                    await fetchProductsApi(dispatch);
                } catch (e) {
                    dispatch(setErrorAction(`Something went wrong! Error: ${e}`));
                } finally {
                    dispatch(setLoadingAction(false));
                }
            }
        };

        fetchProducts();
    }, [products.length, dispatch]);

    return { products, loading, error };
};
