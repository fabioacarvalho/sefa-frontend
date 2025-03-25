import styled from "styled-components";

export const ContentStyle = styled.div`
    flex-grow: 1; /* Permite que o conteúdo preencha o espaço restante */
    overflow-y: auto; /* Garante que o scroll só aparece quando necessário */
    margin: 0;
    margin-top: 60px;
    padding: 10px 80px;
    box-sizing: border-box; /* Inclui padding no cálculo do tamanho */
    /* height: 100%; */
    height: calc(100vh - 60px); /* Garante que o conteúdo preencha a tela sem ultrapassar */
`;