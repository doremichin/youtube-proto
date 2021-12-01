import React from 'react';
import styled from 'styled-components';

import VideoContainer from '../views/video/containers/VideoContainer';

const Video = () => (
  <Container>
    <VideoContainer />
  </Container>
);

const Container = styled.div`
  position: absolute;
  z-index: -1;
  top: 56px;
  left: 0;
  right: 0;
  display: flex;
`;

export default Video;
