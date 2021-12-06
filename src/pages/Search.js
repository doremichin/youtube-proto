import React from 'react';
import styled from 'styled-components';

import SearchContainer from '../views/search/containers/SearchContainer';
import SidebarContainer from '../views/shared/containers/Sidebar/SidebarContainer';

const Search = () => (
  <Container>
    <SidebarContainer />
    <SearchContainer />
  </Container>
);

const Container = styled.div`
  display: flex;
`;

export default Search;
