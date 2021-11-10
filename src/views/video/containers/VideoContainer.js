import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';

import { Action } from '../../../redux/video/slice';
import { ACCESS_KEY } from '../../../const/config';

const VideoContainer = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.video);
  const { v } = qs.parse(search, { ignoreQueryPrefix: true });
  const videoData = items[0];

  useEffect(() => {
    dispatch(Action.Creators.getVideoById({
      part: ('snippet', 'player'),
      key: ACCESS_KEY,
      id: v,
    }));
  }, []);
  return (
    <Container>
      <div className="box">
        <VideoSection>
          <Video dangerouslySetInnerHTML={{ __html: videoData.player.embedHtml }} />
        </VideoSection>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 56px;
  left: 0;
  right: 0;
  .box{
    background-color: #fff;
  }
`;
const VideoSection = styled.div`
  background-color: #18f;
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
export default VideoContainer;
