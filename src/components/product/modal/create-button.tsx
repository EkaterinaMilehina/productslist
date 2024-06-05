import React, { memo, FC } from 'react';
import { CreateBtn } from '../../../assets/styles/create-button';

type CreateButtonProps = {
    onClick: () => void;
};

const CreateButton: FC<CreateButtonProps> = ({ onClick }) => {
    return (
        <div>
            <CreateBtn onClick={onClick}>+</CreateBtn>
        </div>
    );
};

export default memo(CreateButton);
