import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import {
  IconApp, IconLogo, IconSearch, IconSettingDot,
} from '../../../../icons';
import SearchBoxContainer from '../../containers/SearchBox/SearchBoxContainer';
import LoginButton from '../Button/LoginButton';
import UserInfo from './UserInfo';
import MenuButton from '../Button/MenuButton';
import { toggleSidebar } from '../../../../redux/app/slice';
import SearchBoxInMobile from '../SearchBox/SearchBoxInMobile';
import Contain from '../Common/Contain';

const Header = () => {
  const { search } = useLocation();
  const [isView, setView] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.app.sidebar);
  const isViewSidebar = () => {
    dispatch(toggleSidebar(!sidebar));
  };
  const isViewSearchBox = () => {
    setView((p) => !p);
  };
  const isMobile = useMediaQuery({ maxWidth: 700 });
  useEffect(() => {
    setView(false);
  }, [search]);
  return (
    <Container>
      <Left>
        <MenuButton toggle={isViewSidebar} />

        <Logo to="/">
          <IconLogo />
        </Logo>
      </Left>
      {
            !isMobile
            && <Center><SearchBoxContainer /></Center>
        }
      {
            isView
            && <Contain onClickOut={isViewSearchBox}><SearchBoxInMobile onClick={isViewSearchBox} /></Contain>
        }
      <Right>
        <ButtonGroup>
          {
                isMobile
                && <Button onClick={isViewSearchBox}><IconSearch /></Button>
            }
          <Button>
            <IconApp />
          </Button>
          <Button>
            <IconSettingDot />
          </Button>
          <LoginBox>
            {
                    user
                      ? <UserInfo user={user} /> : <LoginButton />
                }
          </LoginBox>
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
const Button = styled.div`
  cursor: pointer;
  padding: 8px;
  width: 40px;
  height: 40px;
  fill: #fff;
`;
const LoginBox = styled.div`
  margin-left: 4px;
`;
export default React.memo(Header);
