import React, { memo, FC } from 'react';
import { ProductModel } from '../../../models/product.model';
import { Block, ContainerCardImage, CardImage, CardTitle, Price } from '../../../assets/styles/product-card';
import Descriptions from './descriptions';

type ProductCardProps = ProductModel;

const ProductCard: FC<ProductCardProps> = ({ title, image, price, description }) => {
    return (
        <Block>
            {image && (
                <ContainerCardImage>
                    <CardImage src={image} alt={title} />
                </ContainerCardImage>
            )}
            <div>
                <CardTitle>{title}</CardTitle>
                <Descriptions text={description} />
            </div>
            {price && <Price>${price}</Price>}
        </Block>
    );
};

export default memo(ProductCard);
