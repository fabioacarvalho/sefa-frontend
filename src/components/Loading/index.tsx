import React from 'react';
import { Container } from './styles';
import Spinner from '../../assets/img/infinite-spinner.svg';


const Loading: React.FC = () => {
  return (
    <Container>
      <img src={Spinner} alt="Loading..." width={180}/>
      <p>Aguarde...</p>
    </Container>
  );
};

export default Loading;
