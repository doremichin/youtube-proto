import React from 'react';
import styled from 'styled-components';

import { DefaultButton } from '../Button/Button.styled';

const SubscribeItem = ({ item }) => {
  const a = 1;
  return (
    <Container>
      <Thumb>
        <Image>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
        </Image>
      </Thumb>
      <Content>
        <Title>{item.snippet.title}</Title>
        <Desc>{item.snippet.description}</Desc>
      </Content>
      <SubscribeButton>
        구독
      </SubscribeButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 0;
`;
const Thumb = styled.div`
  flex-shrink: 0;
  width: 360px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  width: 135px;
  height: 135px;
  border-radius: 50%;
  overflow: hidden;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Content = styled.div`
    flex-shrink: 1;
  padding-left: 15px;
  padding-right: 40px;
`;
const Title = styled.h2`
  font-size: 18px;
  color: #fff;
  font-weight:500;
  margin-bottom: 10px;
`;
const Desc = styled.p`
  font-size: 12px;
  color: #aaa;
`;
const SubscribeButton = styled(DefaultButton)`
  flex-shrink: 0;
  width: 72px;
  height: 37px;
  background: #ff0000;
  color: #fff;
  font-size: 14px;
  border-radius: 2px;
`;
export default SubscribeItem;
