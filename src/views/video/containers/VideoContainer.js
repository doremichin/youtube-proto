import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import { useMediaQuery } from 'react-responsive';

import { getVideoById } from '../../../redux/video/slice';
import { ACCESS_KEY } from '../../../const/config';
import { SectionContainer } from '../../shared/components/Layout/Layout.styled';
import VideoDetailInfo from '../components/DetailVideo/VideoDetailInfo';
import CommentsContainer from './Comments/CommentsContainer';
import ChannelDetailContainer from './ChannelDetail/ChannelDetailContainer';
import RelatedVideosContainer from './RelatedVideo/RelatedVideosContainer';
import VideoPlayer from '../components/DetailVideo/VideoPlayer';

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
      <Top>
        <VideoPlayer data={data?.items?.[0]} />
      </Top>
      <SectionContainer>
        <Bottom>
          <VideoDetailInfoSection>
            <VideoDetailInfo data={data?.items?.[0]} />
            <ChannelDetailContainer />
            {
              !isLaptopOrDesktop
              && <RelatedVideosContainer isLaptopOrDesktop={false} />
            }
            <CommentsContainer id={v} commentCount={data?.items?.[0].statistics.commentCount} />
          </VideoDetailInfoSection>
          {
            isLaptopOrDesktop
            && <RelatedVideosContainer isLaptopOrDesktop />
          }
        </Bottom>
      </SectionContainer>
    </Container>

  );
};

const Container = styled.div`
  margin: 20px auto 0;
`;

const VideoDetailInfoSection = styled.div`
  flex: 1;
`;
const Top = styled.div`
`;
const Bottom = styled.div`
  display: flex;
`;
export default VideoContainer;
