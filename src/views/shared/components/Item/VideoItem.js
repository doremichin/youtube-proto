import React from 'react';
import styled from 'styled-components';

import { dateCalculate, viewCalculate } from '../../../../lib/utils';

const VideoItem = ({ item, onClick, channels }) => {
  const publishedDate = item.snippet.publishedAt;
  const gapToCurrentDay = dateCalculate(publishedDate);
  const viewCount = Number(item.statistics.viewCount);
  const views = viewCalculate(viewCount);

  return (
    <Container onClick={onClick}>
      <Top>
        <VideoThumb>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
        </VideoThumb>
      </Top>
      <Bottom>
        <Left>
          <ChannelThumb>
            {
              channels
                && <img src={channels.items[0].snippet.thumbnails.medium.url} alt="" />
            }
          </ChannelThumb>
        </Left>
        <Right>
          <Title>
            {item.snippet.title}
          </Title>
          <ChannelTitle>
            {item.snippet.channelTitle}
          </ChannelTitle>
          <Static>
            <span>조회수 {views}회</span>&nbsp;·&nbsp;
            <span>{gapToCurrentDay}</span>
          </Static>
        </Right>
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
const VideoThumb = styled.div`
  width: 100%;
  img{
    width: 100%;
  }
`;
const Bottom = styled.div`
  font-size: 14px;
  color: #aaa;
  display: flex;
`;
const Left = styled.div`
  margin-right: 10px;
`;
const ChannelThumb = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  overflow: hidden;
  background: #333;
`;
const Right = styled.div`
  
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

export default React.memo(VideoItem);
