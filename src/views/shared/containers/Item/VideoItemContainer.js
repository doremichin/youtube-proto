import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { toggleSidebar } from '../../../../redux/app/slice';
import { getChannelsData } from '../../../../redux/channels/slice';
import { ACCESS_KEY } from '../../../../const/config';
import VideoItem from '../../components/Item/VideoItem';

const VideoItemContainer = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = String(item.snippet.channelId);
  const channels = useSelector((state) => state?.channels?.[id]);
  const clickVideo = () => {
    dispatch(toggleSidebar(false));
    history.push(`/watch?v=${item.id}`);
  };
  useEffect(() => {
    dispatch(getChannelsData({
      part: 'snippet,contentDetails',
      key: ACCESS_KEY,
      id,
    }));
  }, []);
  return (
    <Container>
      <VideoItem item={item} onClick={clickVideo} channels={channels} />
    </Container>
  );
};

const Container = styled.div`
`;

export default React.memo(VideoItemContainer);
