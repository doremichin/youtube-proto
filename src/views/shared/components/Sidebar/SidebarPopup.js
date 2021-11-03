import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import {
  IconClock, IconCompass, IconHome, IconStorage, IconSubscribe,
} from '../../../../icons';
import LoginButton from '../Button/LoginButton';

const SidebarPopup = ({ view }) => {
  const a = 1;
  return (
    <Container className={cn({ view })}>
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
  );
};

const Container = styled.div`
  position: fixed;
  z-index: 10;
  top: 56px;
  left: 0;
  width: 240px;
  height: 100vh;
  background: rgba(33, 33, 33, 0.98);
  &.view{
    left: -100%;
  }
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

export default SidebarPopup;
