import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useGoogleLogin } from 'react-google-login';

import { IconLogin } from '../../../../icons';
import { setUserInfo } from '../../../../redux/auth/slice';

const LoginButton = () => {
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    const profile = res.profileObj;
    dispatch(setUserInfo(profile));
  };
  const onFailure = (err) => {
    throw error(err);
  };
  const { signIn, loaded } = useGoogleLogin({
    onSuccess,
    clientId: '896627521201-rdfc3vn6jqjq858ac6qo904oiaa9oiqc.apps.googleusercontent.com',
    cookiePolicy: 'single_host_origin',
    isSignedIn: true,
    onFailure,
  });
  if (!loaded) return null;
  return (
    <ButtonLogin onClick={signIn}>
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
