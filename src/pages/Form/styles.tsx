import styled from "styled-components";

export const FormContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Duas colunas */
    gap: 20px; /* Espaçamento entre os inputs */
    width: 100%;
    
    /* Faz cada campo ocupar as colunas corretamente */
    > div {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .error {
        color: red;
        font-size: 12px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 100%;
`;

export const InputField = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 1px solid #333;
    border-radius: 5px;
    outline: none;

    &:focus {
        border-color: #1677ff;
    }
`;

export const SelectField = styled.select`
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #333;
    border-radius: 5px;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #333;
`;