import React, { memo, FC, useState } from 'react';
import Modal from './modal';
import CreateButton from './create-button';
import ProductCreationForm from './product-creation.form';
import { ProductModel } from '../../../models/product.model';
import { useDispatch } from 'react-redux';
import { createProductApi } from '../../../services/product-api.service';


const ProductCreationContainer: FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleSubmit = async (product: Partial<ProductModel>) => {
        try {
            await createProductApi(dispatch, product);
            handleCloseModal();

        } catch (error) {
            console.error('Failed to create product:', error);
        }
    };

    return (
        <div>
            <CreateButton onClick={handleOpenModal} />
            <Modal visible={isModalOpen} onClose={handleCloseModal} title='Create Product'>
                <ProductCreationForm onSubmit={handleSubmit} />
            </Modal>
        </div>
    );
};

export default memo(ProductCreationContainer);
