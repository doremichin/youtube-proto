import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/Header';
import { Action } from '../../../redux/app/slice';
import SidebarContainer from './SidebarContainer';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { popup } = useSelector((state) => state.app);
  const [toggle, setToggle] = useState(popup);
  const togglePopup = () => {
    setToggle(!toggle);
    dispatch(Action.Creators.togglePopup(!toggle));
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
