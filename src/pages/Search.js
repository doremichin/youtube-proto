import React from 'react';
import styled from 'styled-components';

import SearchContainer from '../views/search/containers/SearchContainer';
import SidebarContainer from '../views/shared/containers/SidebarContainer';

const Search = () => {
  const a = 1;
  return (
    <Container>
      <SidebarContainer />
      <SearchContainer />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
`;

export default Search;
