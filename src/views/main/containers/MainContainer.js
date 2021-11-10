import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import cn from 'classnames';

const MainContainer = () => {
  const a = 1;
  const { sidebar } = useSelector((state) => state.app);
  return (
    <Container className={cn({ sidebar })}>
      <Box>
        안녕 나는 테스트용 박스야
        안녕 나는 테스트용 박스야
        안녕 나는 테스트용 박스야
        안녕 나는 테스트용 박스야
      </Box>
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
      <Box />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 56px;
  left: 240px;
  &.sidebar{
    left: 72px;
  }
`;
const Box = styled.div`
  background: #18f;
  height: 400px;
  width: 500px;
  color: #fff;
`;
export default MainContainer;
