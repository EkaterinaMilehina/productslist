import React, { memo, FC, useState } from 'react';
import Modal from '../modal/modal';
import { useDispatch } from 'react-redux';
import { deleteProductApi } from '../../../services/product-api.service';
import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete.svg';
import { DeleteBtn, Btns } from '../../../assets/styles/delete-product';
import Button from '../../UI/button';

interface ProductDeleteContainerProps {
    productId: number;
}

const ProductDeleteContainer: FC<ProductDeleteContainerProps> = ({ productId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    const handleDelete = async () => {
        try {
            await deleteProductApi(dispatch, productId);
            handleCloseModal();
        } catch (error) {
            console.error('Failed to delete product:', error);
        }
    };
    return (
        <div>
            <DeleteBtn onClick={handleOpenModal}>
                <DeleteIcon />
            </DeleteBtn>
            <Modal visible={isModalOpen} onClose={handleCloseModal} title='Do you want to remove the product ?'>
                <Btns>
                    <Button onClick={handleDelete}>Yes</Button>
                    <Button onClick={handleCloseModal}>No</Button>
                </Btns>
            </Modal>
        </div>
    );
};

export default memo(ProductDeleteContainer);
