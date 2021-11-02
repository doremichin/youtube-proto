import React from 'react';
import styled from 'styled-components';

import { DefaultButton } from '../Button/Button.styled';
import {
  IconClock,
  IconCompass, IconHome, IconStorage, IconSubscribe,
} from '../../../../icons';

const SidebarStatic = () => {
  const a = 1;
  return (
    <Container>
      <Button>
        <IconWrapper>
          <IconHome />
        </IconWrapper>
        홈
      </Button>
      <Button>
        <IconWrapper>
          <IconCompass />
        </IconWrapper>
        탐색
      </Button>
      <Button>
        <IconWrapper>
          <IconSubscribe />
        </IconWrapper>
        구독
      </Button>
      <Button>
        <IconWrapper>
          <IconStorage />
        </IconWrapper>
        보관함
      </Button>
      <Button>
        <IconWrapper>
          <IconClock />
        </IconWrapper>
        시청 기록
      </Button>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 56px;
  width: 72px;
  height: 100vh;
  background: rgba(33, 33, 33, 0.98);
  display: flex;
  flex-direction: column;
`;
const Button = styled(DefaultButton)`
  width: 72px;
  height: 74px;
  background: transparent;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  &:hover{
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  fill: #fff;
  margin-bottom: 5px;
`;
export default SidebarStatic;
