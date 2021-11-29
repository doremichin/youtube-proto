import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { getVideoList } from '../../../redux/video/slice';
import { ACCESS_KEY } from '../../../const/config';
import VideoList from '../components/VideoList';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const MainContainer = () => {
  const sidebar = useSelector((state) => state.app.sidebar);
  const dispatch = useDispatch();
  const { items, nextPageToken } = useSelector((state) => state.video.list);

  const getVideos = () => {
    dispatch(getVideoList({
      part: 'snippet,statistics,contentDetails',
      chart: 'mostPopular',
      key: ACCESS_KEY,
      regionCode: 'kr',
      maxResults: 30,
      pageToken: nextPageToken,
    }));
  };
  useEffect(() => {
    getVideos();
  }, []);

  const next = () => {
    if (items?.length > 0) {
      getVideos();
    }
  };
  if (!items) return null;

  return (
    <Container className={cn({ sidebar })}>
      <InfiniteScroll next={next} hasMore={items?.length < 100}>
        <VideoList items={items} />
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  left: 72px;
  top: 56px;
  right: 0;
  &.sidebar{
    left: 240px;
  }
`;

export default MainContainer;
