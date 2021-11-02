import React from 'react';
import styled from 'styled-components';

import MainContainer from '../views/main/containers/MainContainer';
import SidebarContainer from '../views/shared/containers/SidebarContainer';

const Main = () => {
  const a = 1;
  return (
    <Container>
      <SidebarContainer />
      <MainContainer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;
export default Main;
