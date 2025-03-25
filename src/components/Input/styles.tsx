import styled from "styled-components";

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
`;

export const InputField = styled.input`
    padding: 8px;
    font-size: 16px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 5px;
    outline: none;

    &:focus {
        border-color: ${({ theme }) => theme.colors.border_focus};
    }
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors ? theme.colors.label : "#333"};
`;
