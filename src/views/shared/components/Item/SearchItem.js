import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getVideoStatistics } from '../../../../redux/video/slice';
import { ACCESS_KEY } from '../../../../const/config';
import { dateCalculate, viewCalculate } from '../../../../lib/utils';

const SearchItem = ({
  item, onClick, channels, channelId,
}) => {
  if (!item?.snippet || !channels[channelId]) return null;
  const dispatch = useDispatch();
  const videoStatus = useSelector((state) => state?.video?.[item.id.videoId]?.items[0]);
  const getVideoStatus = () => {
    dispatch(getVideoStatistics({
      part: 'statistics,snippet',
      key: ACCESS_KEY,
      id: item.id.videoId,
    }));
  };
  const publishedDate = videoStatus?.snippet?.publishedAt;
  const gapToCurrentDay = dateCalculate(publishedDate);
  const viewCount = Number(videoStatus?.statistics?.viewCount);
  const views = viewCalculate(viewCount);
  useEffect(() => {
    getVideoStatus();
  }, []);
  return (
    <Container onClick={onClick}>
      <Thumb>
        <Image>
          <img src={item.snippet.thumbnails.medium.url} alt="" />
        </Image>
      </Thumb>
      <Content>
        <Title>{item.snippet.title}</Title>
        <Static>
          <span>조회수 {views}회</span>&nbsp;·&nbsp;
          <span>{gapToCurrentDay}</span>
        </Static>
        <Channel>
          <ChannelThumb>
            <img src={channels[channelId].items[0].snippet.thumbnails.medium.url} alt="" />
          </ChannelThumb>
          <ChannelTitle>
            {channels[channelId].items[0].snippet.title}
          </ChannelTitle>
        </Channel>
        <Desc>{item.snippet.description}</Desc>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
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
  display: flex;
  align-items: center;
  margin-bottom: 10px;

`;
const ChannelThumb = styled.div`
  width: 24px;
  overflow: hidden;
  border-radius: 50%;
  margin-right: 6px;
`;
const ChannelTitle = styled.div`
  color: #aaa;
  font-size: 12px;
`;
const Desc = styled.p`
  font-size: 12px;
  color: #aaa;
`;
const Static = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  color: #aaa;
  span{
    display: inline-block;
  }
`;
export default React.memo(SearchItem);
