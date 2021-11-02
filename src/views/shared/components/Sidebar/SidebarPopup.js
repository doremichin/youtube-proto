import React from 'react';
import styled from 'styled-components';
import cn from 'classnames';

import { IconHome } from '../../../../icons';

const SidebarPopup = ({ view }) => {
  const a = 1;

  return (
    <Container className={cn({ view })}>
      <List>
        <ListItem>
          <IconWrapper>
            <IconHome />
          </IconWrapper>
          홈
        </ListItem>
      </List>
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
  padding: 5px 0;
  width: 100%;
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
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
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`;
export default SidebarPopup;
