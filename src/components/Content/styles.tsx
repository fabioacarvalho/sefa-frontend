import styled from "styled-components";

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw; /* Garante a largura total da viewport */
    height: 100vh; /* Garante a altura total da viewport */
    margin: 0;
    padding: 0;
    overflow: hidden; /* Evita scrollbars desnecessários */
    color: #333;

    .content {
        display: flex;
        flex-direction: row;
        flex-grow: 1; /* Garante que o conteúdo ocupa o espaço disponível */
        flex: 1; /* Faz o conteúdo preencher o espaço restante */
        overflow: hidden; /* Evita scroll externo no layout principal */
    }

    .content1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: row;
        gap: 10px;
    }
`;