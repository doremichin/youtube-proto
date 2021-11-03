import React from 'react';
import styled from 'styled-components';

import { IconLogin } from '../../../../icons';

const LoginButton = () => {
  const a = 1;
  return (
    <ButtonLogin>
      <IconWrapper className="loginIcon">
        <IconLogin />
      </IconWrapper>
      <ButtonName>
        로그인
      </ButtonName>
    </ButtonLogin>
  );
};

const ButtonLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  width: 95px;
  height: 40px;
  border: 1px solid #3ea6ff;
  border-radius: 3px;
  cursor: pointer;
`;
const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  fill: #3ea6ff;
`;
const ButtonName = styled.span`
  font-size: 14px;
  color: #3ea6ff;
`;
export default LoginButton;
