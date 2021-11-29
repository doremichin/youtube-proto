import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useIntersection } from '../../../../hooks/useIntersection';

const InfiniteScroll = ({ children, next, hasMore }) => {
  if (hasMore === undefined) {
    throw new Error('hasMore is required');
  }
  const [isInView, sentinelRef] = useIntersection();
  useEffect(() => {
    if (isInView) {
      next?.();
    }
  }, [isInView]);

  return (
    <Container>
      {children}
      {
        hasMore
        && (
        <Sentinel ref={sentinelRef}>
          <img src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />
        </Sentinel>
        )
      }
    </Container>
  );
};

const Container = styled.div`

`;
const Sentinel = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  img{
    width: 30px;
  }
`;
export default InfiniteScroll;
