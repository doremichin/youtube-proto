import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { IconMenu } from '../../../../icons';
import { toggleSidebar } from '../../../../redux/app/slice';

const MenuButton = () => {
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.app.sidebar);
  const toggle = () => {
    dispatch(toggleSidebar(!sidebar));
  };
  return (
    <ButtonMenu onClick={toggle}>
      <IconMenu />
    </ButtonMenu>
  );
};

const ButtonMenu = styled.div`
  padding: 8px;
  width: 40px;
  height: 40px;
  fill: #fff;
  cursor: pointer;
`;

export default MenuButton;
