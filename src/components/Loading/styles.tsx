import styled from "styled-components";

export const Container = styled.div`
    position: fixed; /* Fixa o componente no centro da tela */
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Tela de fundo opaca */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    z-index: 9999; /* Garante que o loading fique por cima de outros elementos */

    @keyframes rotate {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }

    /* animation: rotate 2s linear infinite; */

    p {
        color: #FFF;
    }
`;