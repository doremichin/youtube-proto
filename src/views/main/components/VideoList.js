import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import MainGridList from '../../shared/components/List/MainGridList';
import VideoItem from '../../shared/components/Item/VideoItem';

const VideoList = () => {
  const { items } = useSelector((state) => state.video.list);

  const renderItem = (item) => <VideoItem item={item} />;
  return (
    <Container>
      <MainGridList data={items} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`
    padding: 40px 40px 0;
`;

export default VideoList;
