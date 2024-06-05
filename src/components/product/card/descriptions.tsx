import React, { memo, FC, useState } from 'react';
import { MAX_LENGTH } from '../../../constants/descriptions.constants';
import { Block } from '../../../assets/styles/descriptions';
import Button from '../../UI/button';

type DescriptionsProps = {
    text: string;
    maxLength?: number;
};

const Descriptions: FC<DescriptionsProps> = ({ text, maxLength = MAX_LENGTH }) => {
    const [isShowing, setIsShowing] = useState(false);

    const croppedText = text.length > maxLength ? text.slice(0, maxLength) + '...' : text;

    const toggleDetails = () => {
        setIsShowing(!isShowing);
    };

    return (
        <Block>
            <p>{isShowing ? text : croppedText}</p>
            {text.length > maxLength && !isShowing && <Button onClick={toggleDetails}>Show Details</Button>}
            {isShowing && <Button onClick={toggleDetails}>Hide Details</Button>}
        </Block>
    );
};

export default memo(Descriptions);
