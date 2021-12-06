import React from 'react';
import styled from 'styled-components';

import VideoContainer from '../views/video/containers/VideoContainer';
import SidebarSlideContainer from '../views/shared/containers/SidebarSlideContainer';
import ModalPortal from '../lib/ModalPortal';

const Video = () => (
  <Container>
    <ModalPortal>
      <SidebarSlideContainer />
    </ModalPortal>
    <VideoContainer />
  </Container>
);

const Container = styled.div`
  padding: 56px 15px 0;
`;

export default Video;
