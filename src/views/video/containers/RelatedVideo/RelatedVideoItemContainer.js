import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getVideoStatistics } from '../../../../redux/video/slice';
import { ACCESS_KEY } from '../../../../const/config';
import RelatedVideoItem from '../../components/RelatedVideo/RelatedVideoItem';
import { toggleSidebar } from '../../../../redux/app/slice';

const RelatedVideoItemContainer = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const getVideoStatus = () => {
    dispatch(getVideoStatistics({
      part: 'statistics',
      key: ACCESS_KEY,
      id: item.id.videoId,
    }));
  };
  const clickVideo = () => {
    dispatch(toggleSidebar(false));
    history.push(`/watch?v=${item.id.videoId}`);
  };
  useEffect(() => {
    getVideoStatus();
  }, []);
  return (
    <Container onClick={clickVideo}>
      <RelatedVideoItem item={item} />
    </Container>
  );
};

const Container = styled.div`
  cursor: pointer;
`;

export default RelatedVideoItemContainer;
