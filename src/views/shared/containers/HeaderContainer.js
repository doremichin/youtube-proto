import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import SidebarContainer from './SidebarContainer';
import { selectSidebar, togglePopup } from '../../../redux/app/slice';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector(selectSidebar);
  const toggle = () => {
    dispatch(togglePopup(!sidebar));
  };
  return (
    <Container>
      <Header togglePopup={toggle} />
      <SidebarContainer />
    </Container>
  );
};

const Container = styled.div`

`;

export default HeaderContainer;
