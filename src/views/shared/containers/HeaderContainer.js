import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import { Action } from '../../../redux/app/slice';
import SidebarContainer from './SidebarContainer';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { sidebar } = useSelector((state) => state.app);
  const togglePopup = () => {
    dispatch(Action.Creators.togglePopup(!sidebar));
  };
  return (
    <Container>
      <Header togglePopup={togglePopup} />
      <SidebarContainer />
    </Container>
  );
};

const Container = styled.div`

`;

export default HeaderContainer;
