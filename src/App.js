import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/home-page.component';

import logo from './logo.svg';
import './App.css';
import ShopItem from './pages/shop-page/shop-items.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopItem} />
      </Switch>
    </div>
  );
}

export default App;
