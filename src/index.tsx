import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  RouteComponentProps,
} from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import { StoreProvider } from './Store';
import './index.css';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App />
      <Route exact path='/' component={Home} />
      <Route exact path='/favorites' component={Favorites} />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
