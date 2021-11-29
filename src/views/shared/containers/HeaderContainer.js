import React from 'react';
import styled from 'styled-components';

import Header from '../components/Header';
import SidebarContainer from './SidebarContainer';

const HeaderContainer = () => (
  <Container>
    <Header />
    <SidebarContainer />
  </Container>
);

const Container = styled.div`

`;

export default HeaderContainer;
