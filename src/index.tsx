import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import Favorites from './Favorites';
import Header from './Header';
import { StoreProvider } from './Store';
import './index.css';

ReactDOM.render(
  <StoreProvider>
    <Router>
      <Header />
      <Route exact path='/' component={Home} />
      <Route exact path='/favorites' component={Favorites} />
    </Router>
  </StoreProvider>,
  document.getElementById('root')
);
