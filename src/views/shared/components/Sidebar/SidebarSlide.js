import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';
import { Link } from 'react-router-dom';

import {
  IconClock, IconCompass, IconHome, IconLogo, IconStorage, IconSubscribe,
} from '../../../../icons';
import LoginButton from '../Button/LoginButton';
import MenuButton from '../Button/MenuButton';

const SidebarSlide = ({ isView, handleClick }) => (
  <>
    <Container className={cn({ isView })}>
      <Top>
        <MenuButton toggle={handleClick} />

        <Logo to="/">
          <IconLogo />
        </Logo>
      </Top>
      <List>
        <ListItem>
          <IconWrapper>
            <IconHome />
          </IconWrapper>
          <span>홈</span>
        </ListItem>
        <ListItem>
          <IconWrapper>
            <IconCompass />
          </IconWrapper>
          <span>탐색</span>
        </ListItem>
        <ListItem>
          <IconWrapper>
            <IconSubscribe />
          </IconWrapper>
          <span>구독</span>
        </ListItem>
      </List>
      <List>
        <ListItem>
          <IconWrapper>
            <IconStorage />
          </IconWrapper>
          <span>보관함</span>
        </ListItem>
        <ListItem>
          <IconWrapper>
            <IconClock />
          </IconWrapper>
          <span>시청 기록</span>
        </ListItem>
      </List>
      <ListLogin>
        <p>로그인하면 동영상에 좋아요를 표시하고 댓글을 달거나 구독할 수 있습니다.</p>
        <LoginButton />
      </ListLogin>
    </Container>
    <Screen className={cn({ isView })} onClick={handleClick} />
  </>

);

const Container = styled.div`
  overflow: hidden;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  width: 240px;
  transform: translateX(-100%);
  background: rgba(33, 33, 33, 0.98);
  transition: linear 0.15s;
  &.isView{
   transform: translateX(0);
  }
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
`;
const Logo = styled(Link)`
  width: 120px;
  height: 56px;
  padding: 15px;
  fill: #fff;
`;
const List = styled.ul`
  padding: 10px 0;
  width: 100%;
  border-bottom: 1px solid rgba(255,255,255,0.1);
`;
const ListLogin = styled.div`
  padding: 20px 30px;
  width: 100%;
  font-size: 14px;
  color: #fff;
  border-bottom: 1px solid rgba(255,255,255,0.1);
  p{
    margin-bottom: 15px;
  }
`;
const ListItem = styled.li`
  height: 40px;
  padding: 0 24px;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  fill: #fff;
  cursor: pointer;
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
  }
  span{
    margin-left: 15px;
  }
`;
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
const Screen = styled.div`
  display: none;
  position: fixed;
  z-index: 10;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  &.isView {
    display: block;
  }
`;
export default SidebarSlide;
