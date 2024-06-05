import React, { memo, FC } from 'react';
import ProductList from './product-list.component';
import { useProducts } from '../../../hooks/products.hook';
import ProductCreationContainer from '../modal/product-creation.container';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const ProductListContainer: FC = () => {
    const { products, loading, error } = useProducts();

    return (
        <div>
            {loading ? (
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ProductList products={products} />
            )}
            <ProductCreationContainer />
        </div>
    );
};

export default memo(ProductListContainer);
