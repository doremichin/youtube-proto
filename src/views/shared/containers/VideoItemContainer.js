import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { togglePopup } from '../../../redux/app/slice';
import { getChannelsData } from '../../../redux/channels/slice';
import { ACCESS_KEY } from '../../../const/config';
import VideoItem from '../components/Item/VideoItem';

const VideoItemContainer = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = String(item.snippet.channelId);
  const clickVideo = () => {
    dispatch(togglePopup(false));
    history.push(`/watch?v=${item.id}`);
  };
  useEffect(() => {
    dispatch(getChannelsData({
      part: 'snippet,contentDetails',
      key: ACCESS_KEY,
      id,
    }));
  }, []);
  const channels = useSelector((state) => state?.channels?.[id]);
  if (!channels) return null;
  return (
    <Container>
      <VideoItem item={item} onClick={clickVideo} channels={channels} />
    </Container>
  );
};

const Container = styled.div`

`;

export default VideoItemContainer;
