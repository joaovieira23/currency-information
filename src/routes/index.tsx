import React from 'react';
import { Switch, Route } from 'react-router-dom';

import CoinDetail from '../pages/CoinDetail'
import CoinSummary from '../pages/CoinSummary'

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={CoinSummary} />
    <Route path="/details/:id" component={CoinDetail} />
  </Switch>
);

export default Routes;
