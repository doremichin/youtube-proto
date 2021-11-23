import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { dateCalculate, viewCalculate } from '../../../../lib/utils';
import { Action } from '../../../../redux/app/slice';

const VideoItem = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const publishedDate = item.snippet.publishedAt;
  const gapToCurrentDay = dateCalculate(publishedDate);
  const viewCount = Number(item.statistics.viewCount);
  const views = viewCalculate(viewCount);

  const clickVideo = () => {
    dispatch(Action.Creators.togglePopup(false));
    history.push(`/watch?v=${item.id}`);
  };

  return (
    <Container onClick={clickVideo}>
      <Top>
        <Image>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
        </Image>
      </Top>
      <Bottom>
        <Title>
          {item.snippet.title}
        </Title>
        <ChannelTitle>
          {item.snippet.channelTitle}
        </ChannelTitle>
        <Static>
          <span>조회수 {views}</span>&nbsp;·&nbsp;
          <span>{gapToCurrentDay}</span>
        </Static>
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
`;
const Top = styled.div`
    margin-bottom: 12px;
`;
const Image = styled.div`
  width: 100%;
  img{
    width: 100%;
  }
`;
const Bottom = styled.div`
  font-size: 14px;
  color: #aaa;
`;
const Title = styled.p`
  color: #fff;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 10px;
`;
const ChannelTitle = styled.p`
    margin-bottom: 5px;
`;
const Static = styled.div`
  span{
    display: inline-block;
  }
`;
export default VideoItem;
