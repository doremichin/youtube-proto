import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Route } from 'react-router-dom';

import SidebarPopup from '../../components/Sidebar/SidebarPopup';
import SidebarStatic from '../../components/Sidebar/SidebarStatic';
import { LaptopOrDesktop, Mobile, Tablet } from '../../components/Layout/Layout.styled';
import ModalPortal from '../../../../lib/ModalPortal';
import SidebarSlideContainer from './SidebarSlideContainer';

const SidebarContainer = () => {
  const sidebar = useSelector((state) => state.app.sidebar);
  return (
    <Container>
      <LaptopOrDesktop>
        {
          sidebar
          && <SidebarPopup view={sidebar} />
        }
        <Route exact path={['/', '/results']}><SidebarStatic /></Route>
      </LaptopOrDesktop>
      <Tablet>
        <ModalPortal>
          <SidebarSlideContainer />
        </ModalPortal>
        <Route exact path={['/', '/results']}><SidebarStatic /></Route>
      </Tablet>
      <Mobile>
        <ModalPortal>
          <SidebarSlideContainer />
        </ModalPortal>
      </Mobile>
    </Container>
  );
};

const Container = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 56px;
`;

export default SidebarContainer;
