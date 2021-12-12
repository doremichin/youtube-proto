import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getChannelsData } from '../../../../redux/channels/slice';
import { ACCESS_KEY } from '../../../../const/config';
import SubscribeButton from '../../../shared/components/Button/SubscribeButton';
import { viewCalculate } from '../../../../lib/utils';
import ChannelDescription from '../../components/ChannelDetail/ChannelDescription';

const ChannelDetailContainer = () => {
  const dispatch = useDispatch();
  const { description, channelId } = useSelector((state) => state.video.data?.items?.[0].snippet);
  const channelData = useSelector((state) => state.channels[channelId]);
  useEffect(() => {
    dispatch(getChannelsData({
      part: 'snippet,contentDetails,statistics',
      key: ACCESS_KEY,
      id: channelId,
    }));
  }, [channelId]);
  if (!channelData?.items || !description) return null;

  return (
    <Container>
      <Thumb>
        <Image>
          <img src={channelData.items[0].snippet.thumbnails.default.url} alt="channel-thumbnail" />
        </Image>
      </Thumb>
      <Desc>
        <ChannelTitle>{channelData.items[0].snippet.title}</ChannelTitle>
        <SubscribeCount>
          구독자 {viewCalculate(channelData?.items?.[0]?.statistics?.subscriberCount)}
        </SubscribeCount>
        <ChannelDescription data={description} />
      </Desc>
      <SubscribeButton />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  margin-bottom: 20px;
`;
const Thumb = styled.div`
  margin-right: 15px;
`;
const Image = styled.div`
  overflow: hidden;
  border-radius: 50%;
  width: 48px;
  height: 48px;

`;
const Desc = styled.div`
  flex: 1;
  color: #fff;
`;
const ChannelTitle = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;
const SubscribeCount = styled.div`
  font-size: 12px;
  color: #aaa;
  margin-bottom: 10px;
`;

export default ChannelDetailContainer;
