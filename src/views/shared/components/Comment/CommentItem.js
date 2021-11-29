import React from 'react';
import styled from 'styled-components';

import { IconDisLike, IconLike } from '../../../../icons';
import { likeCalculate } from '../../../../lib/utils';

const CommentItem = ({ item }) => {
  const commentData = item.snippet.topLevelComment.snippet;
  const likeCount = likeCalculate(commentData.likeCount);
  return (
    <Container>
      <Thumb>
        <Image>
          <img src={commentData.authorProfileImageUrl} alt="" />
        </Image>
      </Thumb>
      <Desc>
        <UserName>
          {commentData.authorDisplayName}
        </UserName>
        <Comment dangerouslySetInnerHTML={{ __html: commentData.textDisplay }} />
        <Status>
          <IconBox><IconLike /></IconBox><span className="likeCount">{likeCount}</span><IconBox><IconDisLike /></IconBox>&nbsp;&nbsp;&nbsp;답글
        </Status>
      </Desc>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const Thumb = styled.div`
  margin-right: 10px;
`;
const Image = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  img{
    width: 100%;
  }
`;
const Desc = styled.div`
  color: #fff;
`;
const UserName = styled.div`
  font-size: 13px;
  margin-bottom: 5px;
`;
const Comment = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
    a{
      color: #18f;
    }
`;
const Status = styled.div`
  font-size: 12px;
  color: #aaa;
  display: flex;
  align-items: center;
  .likeCount{
    margin: 0 15px 0 10px;
  }

`;
const IconBox = styled.span`
  display: inline-block;
  width: 18px;
  fill: #fff;
`;
export default CommentItem;
