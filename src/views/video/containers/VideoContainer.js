import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { Action } from '../../../redux/video/slice';
import { ACCESS_KEY } from '../../../const/config';
import { SectionContainer } from '../../shared/components/Layout/Layout.styled';
import VideoDetailInfo from '../components/VideoDetailInfo';
import CommentsContainer from './CommentsContainer';

const VideoContainer = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const videoData = useSelector((state) => state.video?.data?.items?.[0]);
  const { sidebar } = useSelector((state) => state.app);
  const { v } = qs.parse(search, { ignoreQueryPrefix: true });

  useEffect(() => {
    dispatch(Action.Creators.getVideoById({
      part: 'snippet,player,statistics',
      key: ACCESS_KEY,
      id: v,
    }));
  }, [v]);
  if (!videoData) return null;
  return (
    <>
      <Screen className={cn({ sidebar })} />
      <Container>
        <SectionContainer>
          <VideoSection>
            <Video dangerouslySetInnerHTML={{ __html: videoData.player.embedHtml }} />
          </VideoSection>
          <RelatedDetailSection>
            <VideoDetailInfo data={videoData} />
            <CommentsContainer id={v} commentCount={videoData.statistics.commentCount} />
          </RelatedDetailSection>
        </SectionContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  z-index: -1;
  top: 56px;
  left: 0;
  right: 0;
  .box{
    background-color: #fff;
  }
`;
const Screen = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(17, 136, 255, 0.4);
  display: none;
  &.sidebar{
    display: block;
  }
`;
const Grid = styled.div`
  margin: 0 auto;
  max-width: 1600px;
`;
const VideoSection = styled.div`
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
const RelatedDetailSection = styled.div`
  
`;
export default VideoContainer;
