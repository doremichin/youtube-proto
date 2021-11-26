import React from 'react';
import styled from 'styled-components';

const MainGridList = ({ data = [], renderItem }) => {
  const a = 1;
  return (
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
};

const Container = styled.div`

`;
const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
`;
const Col = styled.div`
  width: 16.6%;
  padding: 0 10px;
  margin-bottom: 40px;
  @media ${(props) => props.theme.desktop} {
    width: 20%;
  }
  @media ${(props) => props.theme.laptop} {
    width: 25%;
  }
  @media ${(props) => props.theme.tablet} {
    width: 33.3%;
  }
  @media ${(props) => props.theme.mobile} {
    width: 50%;
  }
`;

export default MainGridList;
