import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import SidebarPopup from '../components/Sidebar/SidebarPopup';
import SidebarStatic from '../components/Sidebar/SidebarStatic';

const SidebarContainer = () => {
  const sidebar = useSelector((state) => state.app.sidebar);
  return (
    <Container>
      <SidebarPopup view={sidebar} />
      <Route exact path={['/', '/results']}>
        <SidebarStatic />
      </Route>

    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
`;

export default SidebarContainer;
