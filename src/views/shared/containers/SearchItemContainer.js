import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SearchItem from '../components/Item/SearchItem';
import { togglePopup } from '../../../redux/app/slice';
import { getChannelsData, selectChannels } from '../../../redux/channels/slice';
import { ACCESS_KEY } from '../../../const/config';

const SearchItemContainer = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const id = item.snippet.channelId;
  const clickVideo = () => {
    dispatch(togglePopup(false));
    history.push(`/watch?v=${item.id.videoId}`);
  };
  useEffect(() => {
    dispatch(getChannelsData({
      part: 'snippet,contentDetails',
      key: ACCESS_KEY,
      id,
    }));
  }, []);
  const channels = useSelector(selectChannels);
  return (
    <Container>
      <SearchItem item={item} onClick={clickVideo} channels={channels} channelId={id} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchItemContainer;
