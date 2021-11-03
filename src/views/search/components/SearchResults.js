import React from 'react';
import styled from 'styled-components';

import SearchItem from '../../shared/components/Item/SearchItem';
import MainList from '../../shared/components/List/MainList';
import SubscribeItem from '../../shared/components/Item/SubscribeItem';

const SearchResults = ({ data = [] }) => {
  const searchItem = (item) => <SearchItem item={item} />;
  const subscribeItem = (item) => <SubscribeItem item={item} />;
  return (
    <Container>
      <MainList data={data} searchItem={searchItem} subscribeItem={subscribeItem} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1096px;
  width: 100%;
  margin: 0 auto;
`;

export default SearchResults;
