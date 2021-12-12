import React from 'react';
import styled from 'styled-components';

import SubscribeItem from '../../shared/components/Item/SubscribeChannelItem';
import SearchGridList from '../../shared/components/List/SearchGridList';
import SearchItemContainer from '../../shared/containers/Item/SearchItemContainer';

const SearchResults = ({ data = [] }) => {
  const searchItem = (item) => <SearchItemContainer item={item} />;
  const subscribeItem = (item) => <SubscribeItem item={item} />;
  return (
    <Container>
      <SearchGridList data={data} searchItem={searchItem} subscribeItem={subscribeItem} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1096px;
  width: 100%;
  margin: 0 auto;
`;

export default SearchResults;
