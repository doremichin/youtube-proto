import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getVideoComments } from '../../../../redux/video/slice';
import { ACCESS_KEY } from '../../../../const/config';
import InfiniteScroll from '../../../shared/components/InfiniteScroll';
import CommentItem from '../../components/Comments/CommentItem';

const CommentsContainer = ({ id, commentCount }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.video.comments);
  const [getComments, setComments] = useState(20);
  useEffect(() => {
    dispatch(getVideoComments({
      part: 'snippet',
      key: ACCESS_KEY,
      order: 'relevance',
      videoId: id,
      maxResults: getComments,
    }));
  }, [getComments]);

  const next = () => {
    if (comments.items?.length > 0) {
      setComments((p) => p + 20);
    }
  };

  return (
    <Container>
      <Title>댓글 {Number(commentCount).toLocaleString()}개</Title>
      <InfiniteScroll next={next} hasMore>
        {
          comments?.items?.map((item, index) => <CommentItem item={item} key={item.id || index} />)
         }
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`

`;
const Title = styled.div`
    color: #fff;
  font-size: 16px;
  margin: 20px 0;
`;
export default CommentsContainer;
