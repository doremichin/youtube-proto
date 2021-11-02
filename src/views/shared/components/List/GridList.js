import React from 'react';
import styled from 'styled-components';

const GridList = ({ data = [] }) => {
  const a = 1;
  return (
    <Container>
      <Row>
        {
                data.map((item, index) => (
                  <Col>
                    {item.title || index}
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
  flex-direction: column;
`;
const Col = styled.div`
  background: #fff;
  border: 1px solid red;
`;

export default GridList;
