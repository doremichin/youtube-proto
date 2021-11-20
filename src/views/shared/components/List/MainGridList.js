import React from 'react';
import styled from 'styled-components';

const MainGridList = ({ data = [], renderItem }) => {
  const a = 1;
  return (
    <Container>
      <Row>
        {
              data.map((item) => (
                <Col>
                  {renderItem(item)}
                </Col>
              ))
          }
      </Row>
    </Container>
  );
};

const Container = styled.div`

`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 25%;
  padding: 0 10px;
  margin-bottom: 40px;
`;

export default MainGridList;
