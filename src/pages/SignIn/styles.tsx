import styled from "styled-components";

export const LoginContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #003366, #00509d);
`;

export const LoginBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  width: 350px;
  display: flex;
  flex-direction: column;
  backdrop-filter: blur(10px);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  text-align: center;
`;

export const Title = styled.h2`
  color: white;
  margin-bottom: 20px;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
`;

export const Icon = styled.div`
  color: white;
  margin-right: 10px;
`;

export const Input = styled.input`
  border: none;
  background: transparent;
  outline: none;
  color: white;
  width: 100%;
  font-size: 16px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: white;

  input {
    margin-right: 10px;
  }

  label {
    font-size: 14px;
  }
`;

export const LoginButton = styled.button`
  background: #1677ff;
  color: white;
  border: none;
  padding: 10px;
  width: 100%;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;

  &:hover {
    background: #135bb0;
  }
`;

export const LinksContainer = styled.div`
  margin-top: 15px;
  font-size: 14px;
  color: white;
  
  a {
    color: #ffffff;
    text-decoration: none;
    font-weight: bold;
  }

  span {
    display: block;
    margin-top: 10px;
  }
`;