import React from 'react';
import styled from 'styled-components';

import MainContainer from '../views/main/containers/MainContainer';

const Main = () => {
  const a = 1;
  return (
    <Container>
      <MainContainer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
export default Main;
