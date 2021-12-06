import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import cn from 'classnames';

import { ACCESS_KEY } from '../../../const/config';
import { getNextRelatedVideos, getRelatedVideos } from '../../../redux/search/slice';
import RelatedVideoItemContainer from './RelatedVideoItemContainer';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const RelatedVideosContainer = ({ isLaptopOrDesktop }) => {
  const { search } = useLocation();
  const { v } = qs.parse(search, { ignoreQueryPrefix: true });
  const dispatch = useDispatch();
  const { items, nextPageToken } = useSelector((state) => state.search.relatedVideos);
  const getNewRelatedVideoList = () => {
    dispatch(getRelatedVideos({
      part: 'snippet',
      key: ACCESS_KEY,
      relatedToVideoId: v,
      maxResults: 25,
      type: 'video',
    }));
  };
  const getNextRelatedVideoList = () => {
    dispatch(getNextRelatedVideos({
      part: 'snippet',
      key: ACCESS_KEY,
      relatedToVideoId: v,
      maxResults: 20,
      type: 'video',
      pageToken: nextPageToken,
    }));
  };

  const next = () => {
    if (items.length > 0) {
      getNextRelatedVideoList();
    }
  };

  useEffect(() => {
    getNewRelatedVideoList();
  }, [v, isLaptopOrDesktop]);

  if (!items) return null;
  return (
    <Container className={cn({ isLaptopOrDesktop })}>
      <Grid>
        {
          isLaptopOrDesktop
            && (
              <Row>
                <InfiniteScroll next={next}>
                  {
                    items.map((item, index) => {
                      if (!item.snippet) return null;
                      return <RelatedVideoItemContainer item={item} key={index} />;
                    })
                  }
                </InfiniteScroll>
              </Row>
            )
        }
        {
          !isLaptopOrDesktop
            && (
              <Row>
                {
                  items.map((item, index) => {
                    if (!item.snippet) return null;
                    return <RelatedVideoItemContainer item={item} key={index} />;
                  })
                }
                <MoreButton onClick={next}>더보기</MoreButton>
              </Row>
            )
        }
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  flex-shrink: 0;
  width: 100%;
  &.isLaptopOrDesktop{
    width: 400px;
  }
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  
`;
const MoreButton = styled.div`
  width: 100%;
  padding: 10px;
  border: 1px solid #32a6ff;
  border-radius: 3px;
  text-align: center;
  color: #32a6ff;
  font-size: 14px;
  cursor: pointer;
  margin-bottom: 10px;
`;
export default RelatedVideosContainer;
