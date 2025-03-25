import React from 'react';
import { HeaderStyle, ButtonSettings } from './styles';
import { FaUpRightFromSquare } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


interface HeaderProps {
    title?: string;
    handleFunction?: () => void;
}

export const Header = ({ handleFunction }: HeaderProps) => {
    const navigate = useNavigate();

    return (
        <HeaderStyle>
            <div>
                <h1>Município Nota A</h1>
            </div>
            <ButtonSettings onClick={() => navigate("/sign-in")}>
                <FaUpRightFromSquare  />
                <span style={{ marginLeft: 10, }}>Sign-In</span>
            </ButtonSettings>
        </HeaderStyle>
    );
};