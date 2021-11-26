import React from 'react';
import styled from 'styled-components';

import SubscribeButton from '../Button/SubscribeButton';

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
      <SubscribeButton />
    </Container>
  );
};

const Container = styled.div`
  height: 200px;
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
  flex: 1;
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

export default SubscribeItem;
