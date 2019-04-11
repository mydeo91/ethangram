import React from "react";
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom';
import './styles.module.scss';
import Auth from 'components/Auth';
import Footer from 'components/Footer';

// Array type으로도 Component 표현 가능
const App = props => [
  // Nav,
  // Route,
  props.isLoggedIn ? <PrivateRoutes key={2} /> : <PublicRoutes key={2} />,
  <Footer key={3} />
];

App.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

// Login token 값에 따라서 각각 다른 Router 호출
const PrivateRoutes = props => (
  <Switch>
    <Route exact path="/" render={()=>'feed'} />
    <Route path="/explore" render={()=>'explore'} />
  </Switch>
);

const PublicRoutes = props => (
  <Switch>
    <Route exact path="/" component={Auth} />
    <Route exact path="/forget" render={()=>'password'} />
  </Switch>
);

export default App;
