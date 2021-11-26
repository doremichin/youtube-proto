import React from 'react';
import styled from 'styled-components';

import { DefaultButton } from './Button.styled';

const SubscribeButton = () => (
  <Container>
    구독
  </Container>
);

const Container = styled(DefaultButton)`
  flex-shrink: 0;
  width: 72px;
  height: 37px;
  background: #ff0000;
  color: #fff;
  font-size: 14px;
  border-radius: 2px;
`;

export default SubscribeButton;
