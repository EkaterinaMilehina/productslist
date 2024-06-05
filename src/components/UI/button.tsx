import React, { ButtonHTMLAttributes, FC } from 'react';
import '../../assets/styles/UI.css';

const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ className, ...rest }) => {
    const innerClassName = className ? `button ${className}` : 'button';

    return <button className={innerClassName} {...rest} />;
};

export default Button;
