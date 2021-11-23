import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Action } from '../../../../redux/app/slice';

const SearchItem = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const clickVideo = () => {
    dispatch(Action.Creators.togglePopup(false));
    history.push(`/watch?v=${item.id.videoId}`);
  };

  return (
    <Container onClick={clickVideo}>
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

const Container = styled.div`
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
