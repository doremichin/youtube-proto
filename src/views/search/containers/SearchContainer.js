import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import qs from 'qs';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import { Action } from '../../../redux/search/slice';
import { ACCESS_KEY } from '../../../const/config';
import GridList from '../../shared/components/List/GridList';

const SearchContainer = () => {
  const { search } = useLocation();
  const { popup } = useSelector((state) => state.app);
  const dispatch = useDispatch();
  const query = qs.parse(search, { ignoreQueryPrefix: true });
  const getSearchResult = () => {
    dispatch(Action.Creators.getSearchResults({
      part: 'snippet',
      q: query.search_query,
      key: ACCESS_KEY,
    }));
  };
  useEffect(() => {
    getSearchResult();
  }, [query]);
  return (
    <Container className={cn({ popup })}>
      <h1>
        search container
      </h1>
      <GridList />
    </Container>
  );
};

const Container = styled.div`
  position: absolute;
  top: 56px;
  left: 240px;
  &.popup{
    left: 72px;
  }
  max-width: 800px;
  width: 100%;
  h1{
    color: #fff;
  }
`;

export default SearchContainer;
