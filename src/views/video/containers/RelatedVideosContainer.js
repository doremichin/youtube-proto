import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import qs from 'qs';

import { ACCESS_KEY } from '../../../const/config';
import { getRelatedVideos } from '../../../redux/search/slice';
import RelatedVideoItemContainer from './RelatedVideoItemContainer';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const RelatedVideosContainer = () => {
  const { search } = useLocation();
  const { v } = qs.parse(search, { ignoreQueryPrefix: true });
  const dispatch = useDispatch();
  const { items, nextPageToken } = useSelector((state) => state.search.relatedVideos);
  const getRelatedVideoList = () => {
    dispatch(getRelatedVideos({
      part: 'snippet',
      key: ACCESS_KEY,
      relatedToVideoId: v,
      maxResults: 15,
      type: 'video',
      pageToken: nextPageToken,
    }));
  };

  const next = () => {
    if (!nextPageToken) {
      getRelatedVideoList();
    }
  };
  useEffect(() => {
    getRelatedVideoList();
  }, [v]);

  if (!items) return null;
  return (
    <Container>
      <Grid>
        <InfiniteScroll next={next}>
          {
            items.map((item, index) => {
              if (!item.snippet) return null;
              return <RelatedVideoItemContainer item={item} key={index} />;
            })
          }
        </InfiniteScroll>
      </Grid>
    </Container>
  );
};

const Container = styled.div`
  flex-shrink: 0;
  width: 400px;
`;
const Grid = styled.div`
  display: flex;
  flex-direction: column;
`;
export default RelatedVideosContainer;
