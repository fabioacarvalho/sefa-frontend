import { ContainerDiv } from "./styles";
import { Container } from "../Container";
import { Header } from "../Header";

export const Content = (props) => {

    return (
        <ContainerDiv>
            <div className="content">
                <Header />
                <Container>
                    {props.children}
                </Container>
            </div>
        </ContainerDiv>
    );
}