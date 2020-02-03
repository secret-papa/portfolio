import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/header';
import Main from './page/main';
import Work from './page/work';
import '../styles/main.scss'

function App() {
  return (
      <Router>
        <Header />
        <Switch>
          <Route path="/work/:id" component={Work} />
          <Route path="/" component={Main} />
        </Switch>
      </Router>
  );
}

export default App;