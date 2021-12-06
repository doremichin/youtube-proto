import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { getVideoById } from '../../../redux/video/slice';
import { ACCESS_KEY } from '../../../const/config';
import { SectionContainer } from '../../shared/components/Layout/Layout.styled';
import VideoDetailInfo from '../components/VideoDetailInfo';
import CommentsContainer from './CommentsContainer';
import VideoChannelInfo from '../components/VideoChannelInfo';
import RelatedVideosContainer from './RelatedVideosContainer';

const VideoContainer = () => {
  const { search } = useLocation();
  const { v } = qs.parse(search, { ignoreQueryPrefix: true });
  const dispatch = useDispatch();
  const data = useSelector((state) => state.video.data);
  const isLaptopOrDesktop = useMediaQuery({ minWidth: 1200 });

  useEffect(() => {
    dispatch(getVideoById({
      part: 'snippet,player,statistics',
      key: ACCESS_KEY,
      id: v,
    }));
  }, [v]);

  if (!data.items) return null;
  return (
    <Container>
      <SectionContainer>
        <VideoSection>
          <Video dangerouslySetInnerHTML={{ __html: data?.items?.[0].player.embedHtml }} />
        </VideoSection>
        <RelatedDetailSection>
          <VideoDetailInfo data={data?.items?.[0]} />
          <VideoChannelInfo />
          {
            !isLaptopOrDesktop
              && <RelatedVideosContainer isLaptopOrDesktop={false} />
          }
          <CommentsContainer id={v} commentCount={data?.items?.[0].statistics.commentCount} />
        </RelatedDetailSection>
      </SectionContainer>
      {
        isLaptopOrDesktop
          && <RelatedVideosContainer isLaptopOrDesktop />
      }
    </Container>

  );
};

const Container = styled.div`
  margin: 20px auto 0;
  max-width: 1700px;
  display: flex;
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
