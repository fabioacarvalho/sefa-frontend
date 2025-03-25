import styled from "styled-components";

export const HeaderStyle = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    width: 100%; /* Garante que o Header ocupa toda a largura */
    position: fixed; /* Mantém fixo no topo */
    top: 0;
    left: 0;
    padding: 10px;
    margin-bottom: 10px;
    padding-left: 10px;
    /* background-color: #dcdcdc; */
    color: #333;
    box-sizing: border-box; /* Inclui padding no cálculo */
    border-bottom: 1px solid #e6f4ff;
    border-radius: 0 0 10px 10px;
    box-shadow: 0 0 10px #e6f4ff;
    z-index: 98;

    .icon-user {
        cursor: pointer;
        margin-right: 10px;
        padding: 5px;
        color: #333;
    }
`;

export const ToggleButton = styled.button`
    background-color: transparent;
    border: none;
    padding: 10px;
    cursor: pointer;
    margin: 0 10px;

`;

export const ButtonSettings = styled.button`
    display: flex;
    background-color: transparent;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    padding: 15px;
    color: #FFF;
    border-radius: 15px;
    background-color: #000;

    &:hover {
        background-color: rgba(237, 237, 237, 0.734);
        color: #333;
    }
`;