import React from 'react';
import {
  Switch, 
  Route,
  Redirect,
} from 'react-router-dom';
import Portfolio from './Portfolio';

const PortfolioRouter = props => (
  <Switch>
    <Route
      exact path="/portfolio"
      component={Portfolio}
    />
    <Route
      path="/portfolio/halfwaze"
      render={() => <p>Halfwaaze</p>}
    />
    <Route
      path="/portfolio/hokono"
      render={() => <p>Hokono</p>}
    />
    <Route
      path="*"
      render={() => <Redirect to="/portfolio" />}
    />
  </Switch>
);

export default PortfolioRouter;