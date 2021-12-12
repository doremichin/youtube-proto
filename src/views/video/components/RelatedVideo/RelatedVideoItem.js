import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { dateCalculate, viewCalculate } from '../../../../lib/utils';

const RelatedVideoItem = ({ item }) => {
  const videoStatus = useSelector((state) => state?.video?.[item.id.videoId]?.items[0]);

  const publishedDate = item?.snippet?.publishedAt;
  const gapToCurrentDay = dateCalculate(publishedDate);
  const viewCount = Number(videoStatus?.statistics?.viewCount);
  const views = viewCalculate(viewCount);

  return (
    <Container>
      <Thumb>
        <Image>
          <img src={item?.snippet?.thumbnails?.medium.url} alt="" />
        </Image>
      </Thumb>
      <Desc>
        <Title>
          {item?.snippet?.title}
        </Title>
        <ChannelTitle>
          {item?.snippet?.channelTitle}
        </ChannelTitle>
        <Static>
          <span>조회수 {views}회</span>&nbsp;·&nbsp;
          <span>{gapToCurrentDay}</span>
        </Static>
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  color: #fff;
  display: flex;
  margin-left: 20px;
  padding: 0 5px 5px 5px;
  margin-bottom: 5px;
`;
const Thumb = styled.div`
  margin-right: 8px;
`;
const Image = styled.div`
  width: 170px;
  height: 95px;
`;
const Desc = styled.div`
  
`;
const Title = styled.h4`
    font-size: 14px;
  font-weight: 400;
  margin-bottom: 8px;
  overflow:hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const ChannelTitle = styled.p`
  font-size: 12px;
  color: #aaa;
  margin-bottom: 5px;
`;
const Static = styled.div`
  font-size: 12px;
  color: #aaa;
  span{
    display: inline-block;
  }
`;
export default RelatedVideoItem;
