import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import SidebarPopup from '../components/Sidebar/SidebarPopup';
import SidebarStatic from '../components/Sidebar/SidebarStatic';

const SidebarContainer = () => {
  const a = 1;
  const { popup } = useSelector((state) => state.app);
  return (
    <Container>
      <SidebarPopup view={popup} />
      <SidebarStatic />
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
`;

export default SidebarContainer;
