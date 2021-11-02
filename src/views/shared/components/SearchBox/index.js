import React from 'react';
import styled from 'styled-components';

import { IconSearch } from '../../../../icons';

const SearchBox = ({ onSubmit, onChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input onChange={onChange} placeholder="검색" />
        <Button>
          <IconSearch />
        </Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
`;
const Input = styled.input`
  max-width: 650px;
  width: 100%;
  height: 40px;
  background: #121212;
  border: 1px solid transparent;
  outline: none;
  padding: 10px;
  font-size: 16px;
  color: #fff;
`;
const Button = styled.button`
  background: rgba(255,255,255,0.08);
  padding: 5px;
  width: 64px;
  height: 40px;
  border: none;
  fill: #fff;
`;
export default SearchBox;
