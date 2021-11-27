import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { getVideoById, selectVideo } from '../../../redux/video/slice';
import { ACCESS_KEY } from '../../../const/config';
import { SectionContainer } from '../../shared/components/Layout/Layout.styled';
import VideoDetailInfo from '../components/VideoDetailInfo';
import CommentsContainer from './CommentsContainer';
import VideoChannelInfo from '../components/VideoChannelInfo';

const VideoContainer = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { data } = useSelector(selectVideo);
  const { sidebar } = useSelector((state) => state.app);
  const { v } = qs.parse(search, { ignoreQueryPrefix: true });

  useEffect(() => {
    dispatch(getVideoById({
      part: 'snippet,player,statistics',
      key: ACCESS_KEY,
      id: v,
    }));
  }, [v]);

  if (!data.items) return null;
  return (
    <>
      <Screen className={cn({ sidebar })} />
      <Container>
        <SectionContainer>
          <VideoSection>
            <Video dangerouslySetInnerHTML={{ __html: data?.items?.[0].player.embedHtml }} />
          </VideoSection>
          <RelatedDetailSection>
            <VideoDetailInfo data={data?.items?.[0]} />
            <VideoChannelInfo />
            <CommentsContainer id={v} commentCount={data?.items?.[0].statistics.commentCount} />
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
