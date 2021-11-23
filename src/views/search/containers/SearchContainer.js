import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { Action } from '../../../redux/search/slice';
import { ACCESS_KEY } from '../../../const/config';
import SearchResults from '../components/SearchResults';

const SearchContainer = () => {
  const { search } = useLocation();
  const { sidebar } = useSelector((state) => state.app);
  const { items } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { search_query } = qs.parse(search, { ignoreQueryPrefix: true });
  const getSearchResult = () => {
    dispatch(Action.Creators.getSearchResults({
      part: 'snippet',
      q: search_query,
      key: ACCESS_KEY,
      maxResults: 10,
    }));
  };
  useEffect(() => {
    getSearchResult();
  }, [search_query]);
  return (
    <Container className={cn({ sidebar })}>
      <SearchResults data={items} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 56px;
  left: 72px;
  right: 0;
  &.sidebar{
    left: 240px;
  }
`;

export default SearchContainer;
