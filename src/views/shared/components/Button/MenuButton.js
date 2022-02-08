import React from 'react';
import styled from 'styled-components';

import { IconMenu } from '../../../../icons';

const MenuButton = ({ onClick }) => (
  <ButtonMenu onClick={onClick}>
    <IconMenu />
  </ButtonMenu>
);

const ButtonMenu = styled.div`
  padding: 8px;
  width: 40px;
  height: 40px;
  fill: #fff;
  cursor: pointer;
`;

export default MenuButton;
