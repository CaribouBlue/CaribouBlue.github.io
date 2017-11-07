import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
//import Contact from './components/Contact';
import PortfolioRouter from './components/PortfolioRouter';
import {
  BrowserRouter as Router,
  Route, Switch,
  Redirect
} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <Switch>
      <Route
        exact path="/"
        component={App}
      />
      <Route
        path="/portfolio"
        component={PortfolioRouter}
      />
      <Route
        render={() => <Redirect to="/" />}
      />
    </Switch>
  </Router>, document.getElementById('root'));
