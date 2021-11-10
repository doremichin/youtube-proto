import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SearchItem = ({ item }) => {
  const a = 1;
  return (
    <Container to={`/watch?v=${item.id.videoId}`}>
      <Thumb>
        <Image>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
        </Image>
      </Thumb>
      <Content>
        <Title>{item.snippet.title}</Title>
        <Channel>
          1
        </Channel>
        <Desc>{item.snippet.description}</Desc>
      </Content>
    </Container>
  );
};

const Container = styled(Link)`
  display: flex;
  align-items: center;
`;
const Thumb = styled.div`
  flex-shrink: 0;
  width: 360px;
  height: 200px;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  background-color: #eee;
  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Content = styled.div`
  height: 200px;
  padding: 0 40px 0 15px;
`;
const Title = styled.h2`
  font-size: 18px;
  color: #fff;
  font-weight:500;
  margin-bottom: 10px;
`;
const Channel = styled.div`
  
`;
const Desc = styled.p`
  font-size: 12px;
  color: #aaa;
`;
export default SearchItem;
