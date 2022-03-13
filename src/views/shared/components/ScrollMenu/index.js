import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import { IconScrollChevronLeft, IconScrollChevronRight } from '../../../../icons';

const ScrollMenu = ({ data, renderItem }) => {
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(1);
  const trackRef = useRef();

  const handleScroll = (e) => {
    const { scrollLeft, clientWidth, scrollWidth } = e.target;
    setMaxScroll(scrollWidth - clientWidth);
    setScrollLeft(scrollLeft);
  };
  const ClickLeft = () => {
    trackRef.current.scrollLeft -= 200;
  };
  const ClickRight = () => {
    trackRef.current.scrollLeft += 200;
  };
  const start = scrollLeft === 0;
  const end = maxScroll - scrollLeft === 0;
  return (
    <Container>
      {
        !start
        && (
        <>
          <Fog left />
          <Arrow left onClick={ClickLeft}>
            <IconScrollChevronLeft />
          </Arrow>
        </>
        )
      }
      <Track onScroll={handleScroll} ref={trackRef}>
        <Nav>
          {renderItem('all')}
          {
            data.map((item, index) => renderItem('category', item, index))
          }
        </Nav>
      </Track>
      {
        !end
        && (
        <>
          <Fog right />
          <Arrow right onClick={ClickRight}>
            <IconScrollChevronRight />
          </Arrow>
        </>
        )
      }
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  padding: 0 50px;
  margin: 0 auto;
  position: relative;
`;
const Track = styled.div`

  overflow-x: auto;
  scroll-behavior: smooth;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Nav = styled.div`
  display: flex;

`;
const Fog = styled.div`
  width: 50px;
  position: absolute;
  top: 0;
  bottom: 0;
  ${(props) => props.left && css`
    left: 50px;
    background-image: linear-gradient(to right, rgba(33, 33, 33, 0.98) 20%, rgba(33, 33, 33, 0) 80%);
  `}
  ${(props) => props.right && css`
    right: 50px;
    background-image: linear-gradient(to left, rgba(33, 33, 33, 0.98) 20%, rgba(33, 33, 33, 0) 80%);
  `}
`;
const Arrow = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 100;
  width: 16px;
  display: flex;
  align-items: center;
  fill: #fff;
  cursor: pointer;
  ${(props) => props.left && css`
    left: 10px;
  `}
  ${(props) => props.right && css`
    right: 10px;
  `}
`;
export default ScrollMenu;
