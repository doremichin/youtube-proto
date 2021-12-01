import React from 'react';
import styled from 'styled-components';

import { IconMenu } from '../../../../icons';

const MenuButton = ({ toggle }) => (
  <ButtonMenu onClick={toggle}>
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
