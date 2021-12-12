import React from 'react';
import styled from 'styled-components';

const VideoPlayer = ({ data }) => (
  <Container>
    <Video dangerouslySetInnerHTML={{ __html: data.player.embedHtml }} />
  </Container>
);

const Container = styled.div`
  padding-bottom: 56%;
  position: relative;
`;
const Video = styled.div`
  position: absolute;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  iframe{
    width: 100%;
    height: 100%;
  }
`;
export default VideoPlayer;
