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
  const { popup } = useSelector((state) => state.app);
  const { items } = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { search_query } = qs.parse(search, { ignoreQueryPrefix: true });
  const getSearchResult = () => {
    dispatch(Action.Creators.getSearchResults({
      part: 'snippet',
      q: search_query,
      key: ACCESS_KEY,
    }));
  };
  useEffect(() => {
    getSearchResult();
  }, [search_query]);
  return (
    <Container className={cn({ popup })}>

      <SearchResults data={items} />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 56px;
  left: 240px;
  right: 0;
  &.popup{
    left: 72px;
  }
`;

export default SearchContainer;
