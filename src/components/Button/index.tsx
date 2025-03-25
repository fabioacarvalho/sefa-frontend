import React from 'react';
import { ButtonStyled } from './styles';

interface ButtonProps {
    className?: string;
    style?: React.CSSProperties;
    help?: string;
    name?: string | React.ReactNode;
    children?: React.ReactNode;
    onClick?: () => void;
    type?: string;
    otherProps?: any[];
};

export const Button = ({ children, name, className, onClick, type, help, otherProps, style}: ButtonProps) => {
    return (
        <ButtonStyled 
            help={help}
            style={style}
            className={className}
            onClick={onClick}
            type={type}
            {...otherProps}
        >{name ? name : children}</ButtonStyled>
    );
}