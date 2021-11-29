import React from 'react';
import styled from 'styled-components';
import { useGoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';

import { setUserInfo } from '../../../../redux/auth/slice';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const onLogoutSuccess = () => {
    dispatch(setUserInfo(null));
  };
  const { signOut, loaded } = useGoogleLogout({
    clientId: '896627521201-rdfc3vn6jqjq858ac6qo904oiaa9oiqc.apps.googleusercontent.com',
    cookiePolicy: 'single_host_origin',
    onLogoutSuccess,
  });
  return (
    <Container onClick={signOut}>
      로그아웃
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
`;

export default LogoutButton;
