import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Contact from './components/Contact';
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
        exact path="/contact"
        component={Contact}
      />
      <Route
        render={() => <Redirect to="/" />}
      />
    </Switch>
  </Router>, document.getElementById('root'));
