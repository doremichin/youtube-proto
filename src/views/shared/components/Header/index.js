import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  IconApp, IconLogo, IconSettingDot,
} from '../../../../icons';
import SearchBoxContainer from '../../containers/SearchBoxContainer';
import LoginButton from '../Button/LoginButton';
import UserInfo from './UserInfo';
import MenuButton from '../Button/MenuButton';
import { toggleSidebar } from '../../../../redux/app/slice';

const Header = () => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.app.sidebar);
  const toggle = () => {
    dispatch(toggleSidebar(!sidebar));
  };
  return (
    <Container>
      <Left>
        <MenuButton toggle={toggle} />

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
            <IconSettingDot />
          </ButtonSetting>
          {
                user
                  ? <UserInfo user={user} /> : <LoginButton />
            }
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

export default React.memo(Header);
