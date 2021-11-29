import React, { useState } from 'react';
import styled from 'styled-components';

import UserInfoModal from './UserInfoModal';
import Contain from '../Common/Contain';

const UserInfo = ({ user }) => {
  const [isView, setIsView] = useState(false);
  const toggle = () => {
    setIsView(!isView);
  };
  return (

    <Container>
      <Thumb onClick={toggle}>
        <img src={user.imageUrl} alt="" />
      </Thumb>
      {
            isView
            && (
            <Contain onClickOut={toggle}>
              <UserInfoModal user={user} />
            </Contain>
            )
        }
    </Container>

  );
};

const Container = styled.div`
  color: #fff;
  position: relative;
  margin-right: 6px;
`;
const Thumb = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export default UserInfo;
