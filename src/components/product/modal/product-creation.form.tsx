import React, { memo, useState } from 'react';
import Input from '../../UI/input';
import Button from '../../UI/button';
import { ProductModel } from '../../../models/product.model';
import { v4 as uuidv4 } from 'uuid';
import { Form, Label } from '../../../assets/styles/form';

interface ProductCreationFormProps {
    onSubmit: (product: Partial<ProductModel>) => void;
}

const ProductCreationForm: React.FC<ProductCreationFormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!title) {
            alert('Title is required');
            return;
        }
        const id = Number(uuidv4());
        onSubmit({ id, title, description });
        setTitle('');
        setDescription('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div>
                <Label htmlFor='title'>
                    Title:
                    <Input id='title' value={title} onChange={e => setTitle(e.target.value)} />
                </Label>
            </div>
            <div>
                <Label htmlFor='description'>
                    Description:
                    <Input id='description' value={description} onChange={e => setDescription(e.target.value)} />
                </Label>
            </div>
            <Button type='submit'>Create</Button>
        </Form>
    );
};

export default memo(ProductCreationForm);
