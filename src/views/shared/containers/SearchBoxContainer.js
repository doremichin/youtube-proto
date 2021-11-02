import React, { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import SearchBox from '../components/SearchBox';

const SearchBoxContainer = () => {
  const [query, setQuery] = useState('');
  const history = useHistory();
  const onSubmit = () => {
    history.push(`/results?search_query=${query}`);
  };
  const onChange = (e) => {
    setQuery(e.target.value);
  };
  return (
    <Container>
      <SearchBox onSubmit={onSubmit} onChange={onChange} />
    </Container>
  );
};

const Container = styled.div`
`;

export default SearchBoxContainer;
