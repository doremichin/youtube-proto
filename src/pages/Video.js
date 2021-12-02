import React from 'react';
import styled from 'styled-components';

import VideoContainer from '../views/video/containers/VideoContainer';
import SidebarSlideContainer from '../views/shared/containers/SidebarSlideContainer';

const Video = () => (
  <Container>
    <SidebarSlideContainer />
    <VideoContainer />
  </Container>
);

const Container = styled.div`
  padding-top: 56px;
  display: flex;
`;

export default Video;
