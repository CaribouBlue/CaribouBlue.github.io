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
      render={() => window.location.assign('https://github.com/CaribouBlue/Halfwaze') }
    />
    <Route
      path="/portfolio/hokono"
      render={() => window.location.assign('https://github.com/CaribouBlue/Hokono') }
    />
    <Route
      path="/portfolio/task-sprint"
      render={() => window.location.assign('https://github.com/CaribouBlue/task-sprint') }
    />
    <Route
      path="*"
      render={() => <Redirect to="/portfolio" />}
    />
  </Switch>
);

export default PortfolioRouter;