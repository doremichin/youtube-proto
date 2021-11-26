import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SearchItem from '../components/Item/SearchItem';
import { Action } from '../../../redux/app/slice';
import { Action as channelsAction } from '../../../redux/channels/slice';
import { ACCESS_KEY } from '../../../const/config';

const SearchItemContainer = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = item.snippet.channelId;
  const clickVideo = () => {
    dispatch(Action.Creators.togglePopup(false));
    history.push(`/watch?v=${item.id.videoId}`);
  };
  useEffect(() => {
    dispatch(channelsAction.Creators.getChannelsData({
      part: 'snippet,contentDetails',
      key: ACCESS_KEY,
      id,
    }));
  }, []);
  const channels = useSelector((state) => state.channels);
  return (
    <Container>
      <SearchItem item={item} onClick={clickVideo} channels={channels} channelId={id} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchItemContainer;
