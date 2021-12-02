import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import SidebarSlide from '../components/Sidebar/SidebarSlide';
import { toggleSidebar } from '../../../redux/app/slice';

const SidebarSlideContainer = () => {
  const isView = useSelector((state) => state.app.sidebar);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleSidebar(!isView));
  };
  return (
    <Container>
      <SidebarSlide isView={isView} handleClick={handleClick} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SidebarSlideContainer;
