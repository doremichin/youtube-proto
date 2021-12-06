import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';

import { getSearchResults } from '../../../redux/search/slice';
import { ACCESS_KEY } from '../../../const/config';
import SearchResults from '../components/SearchResults';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const SearchContainer = () => {
  const { search } = useLocation();
  const dispatch = useDispatch();
  const { items, nextPageToken } = useSelector((state) => state.search.data);
  const { search_query } = qs.parse(search, { ignoreQueryPrefix: true });
  const getSearchResult = () => {
    dispatch(getSearchResults({
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
    <Container>
      <InfiniteScroll next={next}>
        <SearchResults data={items} />
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`
  padding-top: 86px;
  margin: 0 auto;
`;

export default SearchContainer;
