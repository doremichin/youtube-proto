import React from 'react';
import styled from 'styled-components';

const SearchGridList = ({ data = [], renderItem = () => {} }) => (
  <Container>
    <Row>
      {
        data.map((item, index) => (
          <Col key={index}>
            {renderItem(item, item.id.kind)}
          </Col>
        ))
      }
    </Row>
  </Container>
);

const Container = styled.div`

`;
const Row = styled.div`
  display: flex;
  flex-direction: column;
`;
const Col = styled.div`
    margin-bottom: 15px;
`;

export default SearchGridList;
