import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainComponent from './app/common/MainComponent';

const App = () => (
  <Router>
    <Route component={MainComponent} />
  </Router>
);

ReactDOM.render(
  <App />,
  document.getElementById('appRoot')
);
