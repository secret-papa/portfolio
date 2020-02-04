import React from 'react';
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/header';
import Main from './page/main';
import Work from './page/work';
import '../styles/main.scss'

function App({ isMobile }) {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/work/:id" render={(props) => <Work {...props} isMobile={isMobile} />} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
  );
}

App.propTypes = {
  isMobile: PropTypes.bool.isRequired
}

export default App;