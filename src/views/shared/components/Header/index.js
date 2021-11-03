import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  IconApp, IconLogo, IconMenu, IconSetting,
} from '../../../../icons';
import SearchBoxContainer from '../../containers/SearchBoxContainer';
import LoginButton from '../Button/LoginButton';

const Header = ({ togglePopup }) => {
  const a = 1;
  return (
    <Container>
      <Left>
        <ButtonMenu onClick={togglePopup}>
          <IconMenu />
        </ButtonMenu>
        <Logo to="/">
          <IconLogo />
        </Logo>
      </Left>
      <Center>
        <SearchBoxContainer />
      </Center>
      <Right>
        <ButtonGroup>
          <ButtonApp>
            <IconApp />
          </ButtonApp>
          <ButtonSetting>
            <IconSetting />
          </ButtonSetting>
          <LoginButton />
        </ButtonGroup>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 15px;
  background: rgba(33, 33, 33, 0.98);
`;
const Left = styled.div`
  display: flex;
  align-items: center;
`;
const Center = styled.div`
  margin: 0 60px;
  max-width: 800px;
  width: 100%;
`;
const Right = styled.div`
`;
const ButtonMenu = styled.div`
  padding: 8px;
  width: 40px;
  height: 40px;
  fill: #fff;
  cursor: pointer;
`;
const Logo = styled(Link)`
  width: 120px;
  height: 56px;
  padding: 15px;
  fill: #fff;
`;
const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
`;
const ButtonApp = styled.div`
  padding: 8px;
  width: 40px;
  height: 40px;
  fill: #fff;
`;
const ButtonSetting = styled.div`
  padding: 8px;
  width: 40px;
  height: 40px;
  fill: #fff;
  margin-right: 8px;
`;

export default Header;
