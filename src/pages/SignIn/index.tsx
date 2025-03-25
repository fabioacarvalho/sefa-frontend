import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Importando useNavigate
import { useAuthContext } from "../../contexts/AuthContext";
import { FaUser, FaLock } from "react-icons/fa";
import {
    LoginContainer,
    LoginBox,
    Title,
    InputGroup,
    Input,
    Icon,
    CheckboxContainer,
    LoginButton,
    LinksContainer
} from "./styles";
import Loading from "../../components/Loading";

const Login: React.FC = () => {
    const { login } = useAuthContext(); // Use o hook diretamente
    const navigate = useNavigate(); // Inicializando o hook de navegação
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null); // Estado para mensagens de erro
    const [isLoading, setIsLoading] = useState(false); 

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (!username || !password) {
            alert("Please enter both username and password");
            return;
        }
    
        setIsLoading(true); // Ativa o indicador de carregamento
        setError(null); // Limpa mensagens de erro anteriores

        try {
            const success = await login(username, password);
            if (success) {
                navigate("/list"); // Redireciona para a rota desejada após o login
            } else {
                setError("Invalid username or password."); // Mensagem genérica de erro
            }
        } catch (err) {
            console.error("Login failed:", err);
            setError("Ocorreu um erro durante login. Por favor tente novamente."); // Mensagem genérica de erro
        } finally {
            setIsLoading(false); // Desativa o indicador de carregamento
        }
    };

    return (
        <LoginContainer>
            <LoginBox>
                <Title>Login</Title>
                <form onSubmit={handleLogin}>
                    <InputGroup>
                        <Icon>
                            <FaUser />
                        </Icon>
                        <Input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </InputGroup>
                    <InputGroup>
                        <Icon>
                            <FaLock />
                        </Icon>
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </InputGroup>
                    <CheckboxContainer>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember me</label>
                    </CheckboxContainer>
                    <LoginButton type="submit">LOGIN</LoginButton>
                </form>
                <LinksContainer>
                    {/* <a href="#">Forgot your password?</a> */}
                    <span><a href="/">Preencher formulário</a></span>
                    {!!error && (
                        <span>{error}</span>
                    )}
                </LinksContainer>
            </LoginBox>
            {isLoading && (
                <Loading />
            )}
        </LoginContainer>
    );
};

export default Login;