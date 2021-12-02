import React from 'react';
import styled from 'styled-components';

const MainGridList = ({ data = [], renderItem }) => (
  <Container>
    <Row>
      {
          data.map((item, index) => (
            <Col key={item.id || index}>
              {renderItem(item)}
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
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 20%;
  padding: 0 10px;
  margin-bottom: 40px;
  @media ${(props) => props.theme.desktop} {
    width: 25%;
  }
  @media ${(props) => props.theme.laptop} {
    width: 33.33%;
  }
  @media ${(props) => props.theme.tablet} {
    width: 50%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 100%;
  }
`;

export default MainGridList;
