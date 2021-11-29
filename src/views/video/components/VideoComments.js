import React from 'react';
import styled from 'styled-components';

import CommentItem from '../../shared/components/Comment/CommentItem';

const VideoComments = ({ comments }) => {
  if (!comments) return null;
  return (
    <Container>
      {
        comments.map((item, index) => <CommentItem key={item.id || index} item={item} />)
      }
    </Container>
  );
};

const Container = styled.div`

`;

export default VideoComments;
