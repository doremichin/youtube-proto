import React from 'react';
import styled from 'styled-components';

const SearchGridList = ({ data = [], searchItem = () => {}, subscribeItem = () => {} }) => {
  const a = 1;
  return (
    <Container>
      <Row>
        {
                data.map((item, index) => {
                  if (item.id.kind === 'youtube#channel') {
                    return (
                      <Col>
                        {subscribeItem(item)}
                      </Col>
                    );
                  }
                  if (item.id.kind === 'youtube#video') {
                    return (
                      <Col>
                        {searchItem(item)}
                      </Col>
                    );
                  }
                  return null;
                })
            }
      </Row>
    </Container>
  );
};

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
