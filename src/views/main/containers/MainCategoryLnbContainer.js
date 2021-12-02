import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { getChannelsCategory, setCategoryId } from '../../../redux/channels/slice';
import { ACCESS_KEY } from '../../../const/config';
import ScrollMenu from '../../shared/components/ScrollMenu';

const MainCategoryLnbContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.channels.category.items);

  const getMainCategory = () => {
    dispatch(getChannelsCategory({
      part: 'snippet',
      key: ACCESS_KEY,
      regionCode: 'kr',
      hl: 'ko_KR',
    }));
  };
  const selectCategory = (id) => {
    dispatch(setCategoryId(Number(id)));
  };

  useEffect(() => {
    getMainCategory();
  }, []);
  const renderItem = (item, index) => {
    if (!item) return <NavItem key="all" onClick={() => selectCategory(0)}>전체</NavItem>;
    if (item.snippet.assignable) return <NavItem key={index} onClick={() => selectCategory(item.id)}>{item.snippet.title}</NavItem>;
    return null;
  };
  if (!items) return null;
  return (
    <Container>
      <ScrollMenu data={items} renderItem={renderItem} />
    </Container>
  );
};

const Container = styled.div`
  padding: 15px 0;
  background-color: rgba(33,33,33,0.98);
  border-top: 1px solid rgba(255,255,255,0.1);
  border-bottom: 1px solid rgba(255,255,255,0.1);
`;

const NavItem = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  padding: 8px 12px;
  font-size: 14px;
  color: #fff;
  background-color: rgba(255,255,255,0.1);
  border-radius: 100px;
  border: 1px solid rgba(255,255,255,0.1);
  margin-right: 10px;
  transition: 0.3s;
  &:hover{
    background-color: rgba(255,255,255,0.2);

  }
  
`;
export default MainCategoryLnbContainer;
