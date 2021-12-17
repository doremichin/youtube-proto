import React from 'react';
import styled from 'styled-components';
import { Redirect, Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Search';
import Video from './pages/Video';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Main} />
    <Route exact path="/results" component={Search} />
    <Route exact path="/watch" component={Video} />
    <Redirect path="*" push="/" />
  </Switch>
);

const Container = styled.div`

`;

export default Routes;
