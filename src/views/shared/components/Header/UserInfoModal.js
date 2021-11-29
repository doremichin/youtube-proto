import React from 'react';
import styled from 'styled-components';

import LogoutButton from '../Button/LogoutButton';
import {
  IconChevronRight,
  IconDollar, IconExclamation, IconKeyboard,
  IconLogout,
  IconMoon, IconQuestionCircle,
  IconSetting,
  IconSettingPlayer,
  IconUser,
  IconUserChange,
  IconUserData,
  IconWord,
  IconWorld,
} from '../../../../icons';

const UserInfoModal = ({ user }) => (
  <Container>
    <UserInfo>
      <Thumb>
        <img src={user.imageUrl} alt="" />
      </Thumb>
      <Desc>
        <p className="name">{user.name}</p>
        <p className="email">{user.email}</p>
        <p className="account">구글 계정 관리</p>
      </Desc>
    </UserInfo>
    <Section>
      <SectionItem><Icon><IconUser /></Icon><span>채널 만들기</span></SectionItem>
      <SectionItem><Icon><IconDollar /></Icon><span>구매 항목 및 멤버쉽</span></SectionItem>
      <SectionItem><Icon><IconSettingPlayer /></Icon><span>YouTube 스튜디오</span></SectionItem>
      <SectionItem><Icon><IconUserChange /></Icon><span>계정 전환</span><Icon><IconChevronRight /></Icon></SectionItem>
      <SectionItem><Icon><IconLogout /></Icon><span><LogoutButton /></span></SectionItem>
    </Section>
    <Section>
      <SectionItem><Icon><IconMoon /></Icon><span>디자인: 기기 테마</span><Icon><IconChevronRight /></Icon></SectionItem>
      <SectionItem><Icon><IconWord /></Icon><span>언어: 한국어</span><Icon><IconChevronRight /></Icon></SectionItem>
      <SectionItem><Icon><IconWorld /></Icon><span>위치: 한국</span><Icon><IconChevronRight /></Icon></SectionItem>
      <SectionItem><Icon><IconSetting /></Icon><span>설정</span></SectionItem>
      <SectionItem><Icon><IconUserData /></Icon><span>YouTube의 내 데이터</span></SectionItem>
      <SectionItem><Icon><IconQuestionCircle /></Icon><span>고객센터</span></SectionItem>
      <SectionItem><Icon><IconExclamation /></Icon><span>의견 보내기</span></SectionItem>
      <SectionItem><Icon><IconKeyboard /></Icon><span>단축키</span></SectionItem>
    </Section>
    <Section>
      <SectionItem>제한모드: 사용 안함<Icon><IconChevronRight /></Icon></SectionItem>
    </Section>
  </Container>
);

const Container = styled.div`
  position: absolute;
  width: 300px;
  top: 40px;
  right: 0;
  background-color: rgba(33, 33, 33, 0.98);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-top: none;
`;
const UserInfo = styled.div`
  display: flex;
  padding: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

`;
const Thumb = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 15px;
`;
const Desc = styled.div`
  & .email{
    font-size: 14px;
    margin: 3px 0 8px;
  }
  & .account{
    font-size: 14px;
    color: #32a6ff;
    cursor: pointer;
  }
`;
const Section = styled.ul`
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 5px 0;
`;
const Icon = styled.div`
  width: 24px;
  fill: #fff;
`;
const SectionItem = styled.li`
  font-weight: 300;
  font-size: 14px;
  padding: 10px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  & span{
    display: inline-block;
    margin-left: 15px;
    flex: 1;
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
export default UserInfoModal;
