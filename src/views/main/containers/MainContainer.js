import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getNewVideoList, getVideoList } from '../../../redux/video/slice';
import { ACCESS_KEY } from '../../../const/config';
import VideoList from '../components/VideoList';
import InfiniteScroll from '../../shared/components/InfiniteScroll';
import MainCategoryLnbContainer from './MainCategoryLnbContainer';

const MainContainer = () => {
  const dispatch = useDispatch();
  const { items, nextPageToken } = useSelector((state) => state.video.list);
  const videoCategoryId = useSelector((state) => state.channels.selectedCategoryId);
  const getVideos = () => {
    dispatch(getVideoList({
      part: 'snippet,statistics,contentDetails',
      chart: 'mostPopular',
      key: ACCESS_KEY,
      regionCode: 'kr',
      maxResults: 30,
      pageToken: nextPageToken,
      videoCategoryId,
    }));
  };
  const getNewCategoryVideos = () => {
    dispatch(getNewVideoList({
      part: 'snippet,statistics,contentDetails',
      chart: 'mostPopular',
      key: ACCESS_KEY,
      regionCode: 'kr',
      maxResults: 30,
      videoCategoryId,
    }));
  };
  useEffect(() => {
    getVideos();
  }, []);
  useEffect(() => {
    getNewCategoryVideos();
  }, [videoCategoryId]);

  const next = () => {
    if (items?.length > 0) {
      getVideos();
    }
  };
  if (!items) return null;

  return (
    <Container>
      <MainCategoryLnbContainer />
      <InfiniteScroll next={next}>
        <VideoList items={items} />
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 56px;
  overflow: auto;
`;

export default MainContainer;
