import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  IconApp, IconLogin, IconLogo, IconMenu, IconSetting,
} from '../../../../icons';
import SearchBoxContainer from '../../containers/SearchBoxContainer';

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
          <ButtonLogin>
            <div className="loginIcon">
              <IconLogin />
            </div>
            <p>
              로그인
            </p>
          </ButtonLogin>
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
`;
const ButtonLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 8px;
  padding: 12px;
  width: 95px;
  height: 40px;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  cursor: pointer;
  .loginIcon{
    width: 24px;
    height: 24px;
    fill: #3ea6ff;
  }
  p{
    font-size: 14px;
    color: #3ea6ff;
  }
`;
export default Header;
