import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import SearchItem from '../components/item/SearchItem';
import { toggleSidebar } from '../../../redux/app/slice';
import { getChannelsData } from '../../../redux/channels/slice';
import { ACCESS_KEY } from '../../../const/config';

const SearchItemContainer = ({ item }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const channels = useSelector((state) => state.channels);

  const id = item.snippet.channelId;
  const clickVideo = () => {
    dispatch(toggleSidebar(false));
    history.push(`/watch?v=${item.id.videoId}`);
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
      <SearchItem item={item} onClick={clickVideo} channels={channels} channelId={id} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchItemContainer;
