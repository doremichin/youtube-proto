import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { Action } from '../../../redux/video/slice';
import { ACCESS_KEY } from '../../../const/config';
import VideoList from '../components/VideoList';

const MainContainer = () => {
  const { sidebar } = useSelector((state) => state.app);
  const dispatch = useDispatch();

  const getSearchResult = () => {
    dispatch(Action.Creators.getVideoList({
      part: 'snippet,statistics,contentDetails',
      chart: 'mostPopular',
      key: ACCESS_KEY,
      regionCode: 'kr',
      maxResults: 20,
    }));
  };
  useEffect(() => {
    getSearchResult();
  }, []);

  return (
    <Container className={cn({ sidebar })}>
      <VideoList />

    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 56px;
  left: 240px;
  right: 0;
  &.sidebar{
    left: 72px;
  }
`;
const Box = styled.div`
  background: #18f;
  height: 400px;
  width: 500px;
  color: #fff;
`;
export default MainContainer;
