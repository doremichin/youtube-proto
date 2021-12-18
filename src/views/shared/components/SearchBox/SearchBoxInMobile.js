import React from 'react';
import styled from 'styled-components';

import SearchBoxContainer from '../../containers/SearchBox/SearchBoxContainer';
import { IconArrowLeft, IconMicrophone } from '../../../../icons';

const SearchBoxInMobile = ({ onClick }) => (
  <Container>
    <Button onClick={onClick}>
      <IconArrowLeft />
    </Button>
    <Inner>
      <SearchBoxContainer isMobile />
    </Inner>
    <Button>
      <IconMicrophone />
    </Button>
  </Container>
);

const Container = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  position:fixed;
  z-index: 1000;
  height: 56px;
  background: rgba(33, 33, 33, 0.98);
  top: 0;
  left: 0;
  right: 0;
  padding: 0 20px;
`;

const Inner = styled.div`
  margin: 0 20px;
  flex: 1;
`;

const Button = styled.div`
  cursor: pointer;
  width: 24px;
  height: 24px;
  fill: #fff;
`;

export default SearchBoxInMobile;
