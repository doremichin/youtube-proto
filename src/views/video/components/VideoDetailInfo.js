import React from 'react';
import styled from 'styled-components';

import { transDate } from '../../../lib/utils';
import { DefaultButton } from '../../shared/components/Button/Button.styled';
import {
  IconClipping, IconDisLike, IconHorizonDots, IconLike, IconShare, IconStorageAdd,
} from '../../../icons';

const VideoDetailInfo = ({ data }) => {
  const tags = [];
  for (let i = 0; i < 4; i++) {
    if (!data?.snippet?.tags) break;
    tags.push(data?.snippet?.tags[i]);
  }

  const publishedDate = transDate(data?.snippet?.publishedAt);

  return (
    <Container>
      <Left>
        <Tags>
          {
              tags.map((item, index) => (
                <Tag key={index}>#{item}</Tag>
              ))
           }
        </Tags>
        <Title>
          {data.snippet.title}
        </Title>
        <Status>
          <span>조회수 {Number(data.statistics.viewCount).toLocaleString()}회</span>&nbsp;·&nbsp;<span>{publishedDate}</span>
        </Status>
      </Left>
      <Right>
        <ButtonBox>
          <Button><IconBox><IconLike /></IconBox>좋아요</Button>
          <Button><IconBox><IconDisLike /></IconBox>싫어요</Button>
          <Button><IconBox><IconShare /></IconBox>공유</Button>
          <Button><IconBox><IconClipping /></IconBox>클립</Button>
          <Button><IconBox><IconStorageAdd /></IconBox>저장</Button>
          <Button><IconBox><IconHorizonDots /></IconBox></Button>
        </ButtonBox>
      </Right>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 15px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
`;
const Left = styled.div`
`;
const Right = styled.div`
  position: absolute;
  bottom:10px;
  right: 0;
`;
const Tags = styled.div`
  
`;
const Tag = styled.span`
  display: inline-block;
  color: #32a6ff;
  font-size: 12px;
  margin-right: 3px;
  margin-bottom: 4px;
`;
const Title = styled.h2`
    color: #fff;
  font-size: 18px;
  margin-bottom: 12px;
`;
const Status = styled.div`
  color: #aaa;
  font-size: 14px;
`;
const ButtonBox = styled.div`
  display: flex;
`;
const Button = styled(DefaultButton)`
  background-color: transparent;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 15px;
  font-size: 14px;
`;
const IconBox = styled.div`
  width: 25px;
  margin-right: 6px;
  svg{
    fill: #fff;
  }
`;
export default VideoDetailInfo;
