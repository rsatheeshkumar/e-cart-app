import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/home-page.component';
import ShopItem from './pages/shop-page/shop-items.component';
import ShopItemPage from './pages/shop-item-page/shop-item-page.component';

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopItem} />
        <Route exact path="/shop/:url" component={ShopItemPage} />
      </Switch>
    </div>
  );
}

export default App;
