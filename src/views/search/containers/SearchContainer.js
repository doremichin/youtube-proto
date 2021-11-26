import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { Action } from '../../../redux/search/slice';
import { ACCESS_KEY } from '../../../const/config';
import SearchResults from '../components/SearchResults';
import InfiniteScroll from '../../shared/components/InfiniteScroll';

const SearchContainer = () => {
  const { search } = useLocation();
  const { sidebar } = useSelector((state) => state.app);
  const { items } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { search_query } = qs.parse(search, { ignoreQueryPrefix: true });
  const [results, setResults] = useState(10);
  const getSearchResult = () => {
    dispatch(Action.Creators.getSearchResults({
      part: 'snippet',
      q: search_query,
      key: ACCESS_KEY,
      maxResults: results,
    }));
  };
  useEffect(() => {
    getSearchResult();
  }, [search_query, results]);

  if (!items?.length) return null;

  const next = () => {
    setResults((p) => p + 10);
  };
  return (
    <Container className={cn({ sidebar })}>
      <InfiniteScroll next={next}>
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
