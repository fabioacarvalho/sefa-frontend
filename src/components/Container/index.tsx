import { ContentStyle } from "./styles";

export const Container = (props) => {

  return (
    <ContentStyle>
        {props.children}
    </ContentStyle>
  );
};