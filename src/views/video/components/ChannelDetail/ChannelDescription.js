import React, { useState } from 'react';
import styled from 'styled-components';
import cn from 'classnames';

const ChannelDescription = ({ data }) => {
  const [detail, setDetail] = useState(false);
  const clickDetail = () => {
    setDetail((p) => !p);
  };
  return (
    <Container>
      <ChannelDesc className={cn({ detail })}>
        {data}
      </ChannelDesc>
      <DetailToggle onClick={clickDetail}>
        {detail ? '간략히' : '더보기'}
      </DetailToggle>
    </Container>
  );
};

const Container = styled.div`

`;

const ChannelDesc = styled.p`
  width: 50%;
  white-space: pre-line;
  &.detail{
    display: block;
    overflow: visible;
  }
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const DetailToggle = styled.span`
  display: inline-block;
  padding-top: 10px;
  font-size: 12px;
  color: #aaa;
  cursor: pointer;
`;
export default ChannelDescription;
