import React, { useState, InputHTMLAttributes, useEffect } from 'react';
import '../../assets/styles/UI.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value?: string;
    defaultValue?: string;
}

const Input: React.FC<InputProps> = ({ value, defaultValue, className, ...rest }) => {
    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');

    useEffect(() => {
        if (value !== undefined) {
            setInnerValue(value);
        }
    }, [value]);

    const innerClassName = className ? `input ${className}` : `input`;
    return (
        <input value={innerValue} onChange={e => setInnerValue(e.target.value)} className={innerClassName} {...rest} />
    );
};

export default Input;
