import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { searchActions } from '../../../redux/search/slice';
import { ACCESS_KEY } from '../../../const/config';
import SearchResults from '../components/SearchResults';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const SearchContainer = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const sidebar = useSelector((state) => state.app.sidebar);
  const { items, nextPageToken } = useSelector((state) => state.search.data);
  const { search_query } = qs.parse(search, { ignoreQueryPrefix: true });
  const getSearchResult = () => {
    dispatch(searchActions.getSearchResults({
      part: 'snippet',
      q: search_query,
      key: ACCESS_KEY,
      maxResults: 10,
      pageToken: nextPageToken,
    }));
  };
  useEffect(() => {
    getSearchResult();
  }, [search_query]);

  if (!items) return null;

  const next = () => {
    if (items.length > 0) {
      getSearchResult();
    }
  };
  return (
    <Container className={cn({ sidebar })}>
      <InfiniteScroll next={next} hasMore>
        <SearchResults data={items} />
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 56px;
  left: 72px;
  right: 0;
  padding-top: 30px;
  &.sidebar{
    left: 240px;
  }
`;

export default SearchContainer;
