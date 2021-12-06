import React from 'react';
import styled from 'styled-components';

import MainContainer from '../views/main/containers/MainContainer';
import SidebarContainer from '../views/shared/containers/Sidebar/SidebarContainer';

const Main = () => (
  <Container>
    <SidebarContainer />
    <MainContainer />
  </Container>
);

const Container = styled.div`
  display: flex;
`;
export default Main;
