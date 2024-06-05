import React, { memo, FC } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from './product-card.component';
import { useProducts } from '../../../hooks/products.hook';

const ProductCardContainer: FC = () => {
    const { id } = useParams();
    const { products } = useProducts();
    const productId = parseInt(id || '', 10);

    const product = products.find(product => product.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return <ProductCard {...product} />;
};

export default memo(ProductCardContainer);
