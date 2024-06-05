import React, { FC, ReactNode, memo } from 'react';
import { ReactComponent as CloseIcon } from '../../../assets/icons/cross.svg';
import { Overlay, ModalWrapper, Header, Title, CloseButton } from '../../../assets/styles/modal';

type ModalProps = {
    visible: boolean;
    onClose: () => void;
    title: string;
    children?: ReactNode;
};

const Modal: FC<ModalProps> = ({ visible, onClose, children, title }) => {
    if (!visible) return null;

    return (
        <Overlay
            onClick={e => {
                e.target === e.currentTarget && onClose();
            }}
        >
            <ModalWrapper>
                <Header>
                    <Title>{title}</Title>
                    <CloseButton onClick={onClose}>
                        <CloseIcon />
                    </CloseButton>
                </Header>
                <div>{children}</div>
            </ModalWrapper>
        </Overlay>
    );
};

export default memo(Modal);
