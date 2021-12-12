import React from 'react';
import styled from 'styled-components';

import MainGridList from '../../shared/components/List/MainGridList';
import VideoItemContainer from '../../shared/containers/Item/VideoItemContainer';

const VideoList = ({ items }) => {
  const renderItem = (item) => <VideoItemContainer item={item} />;
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
