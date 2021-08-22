import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  // Link,
  Route,
  Switch
} from 'react-router-dom';

import Navbar1 from './components/Navigation/Navbar/Navbar1';
import Cart from './hoc/layout/Cart';
import Home from './hoc/layout/Home';

export default function AppRouter () {
  const [cartNumber, setCartNumber] = useState(0);
  const cartNumberHandler = (event) => {
    setCartNumber(event);
  };

  return (
    <Router>
      <div>
        <Navbar1 toHome={'/home'} toCart={'/cart'} cartNumber={cartNumber}/>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/home">
            <Home cartNumber={cartNumber} onCartNumber={cartNumberHandler}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
