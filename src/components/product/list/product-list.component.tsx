import React, { memo, FC } from 'react';
import { ProductModel } from '../../../models/product.model';
import { Block, ProductItem, ProductTitle, Title, BlockItem, BlockLink } from '../../../assets/styles/product-list';
import { Link } from 'react-router-dom';
import '../../../assets/styles/link.css';
import ProductDeleteContainer from '../confirmation/product-delete';

type ProductListProps = {
    products: ProductModel[];
};

const ProductList: FC<ProductListProps> = ({ products }) => {
    return (
        <Block>
            <Title>Product List</Title>
            {products.map(product => (
                <BlockItem  key={product.id}>
                    <BlockLink>
                        <Link to={`/product/${product.id}`} className='product-link'>
                            <ProductItem>
                                <ProductTitle>{product.title}</ProductTitle>
                            </ProductItem>
                        </Link>
                    </BlockLink>
                    <ProductDeleteContainer productId={product.id} />
                </BlockItem>
            ))}
        </Block>
    );
};

export default memo(ProductList);
