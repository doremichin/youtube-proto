import React from 'react';
import styled from 'styled-components';

import Routes from './Routes';
import { GlobalStyle } from './style/GlobalStyle';
import HeaderContainer from './views/shared/containers/HeaderContainer';

const App = () => {
  const a = 1;
  return (
    <Container>
      <GlobalStyle />
      <HeaderContainer />
      <Routes />
    </Container>
  );
};

const Container = styled.div`
`;

export default App;
