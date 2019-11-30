import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './component/header';
import Layout from './component/layout';
import Main from './page/Main';
import Work from './page/work';
import '../styles/main.scss'

function App() {
  return (
      <Router>
        <Layout Header={Header}>
          <Switch>
            <Route path="/work/:id" component={Work} />
            <Route path="/" component={Main} />
          </Switch>
        </Layout>
      </Router>
  );
}

export default App;