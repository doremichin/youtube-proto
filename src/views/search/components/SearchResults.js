import React from 'react';
import styled from 'styled-components';

import SubscribeItem from './item/SubscribeChannelItem';
import SearchGridList from '../../shared/components/List/SearchGridList';
import SearchItemContainer from '../containers/SearchItemContainer';

const SearchResults = ({ data = [] }) => {
  const renderItem = (item, type) => {
    switch (type) {
      default: break;
      case 'youtube#channel':
        return <SubscribeItem item={item} />;
      case 'youtube#video':
        return <SearchItemContainer item={item} />;
    }
    return null;
  };

  return (
    <Container>
      <SearchGridList data={data} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1096px;
  width: 100%;
  margin: 0 auto;
`;

export default SearchResults;
