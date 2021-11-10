import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Search';
import Video from './pages/Video';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route path="/results" component={Search} />
    <Route path="/watch" component={Video} />
  </Switch>
);

const Container = styled.div`

`;

export default Routes;
