import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  // Link,
  Route,
  Switch
} from 'react-router-dom';

import NavbarCustom from './components/Navigation/Navbar/NavbarCustom';
import Cart from './hoc/layout/Cart';
import Home from './hoc/layout/Home';

export default function App () {
  const [cartNumber, setCartNumber] = useState(0);
  const handleCartNumber = (cartNumberArg) => {
    setCartNumber(cartNumberArg);
  };

  return (
    <Router>
      <div>
        <NavbarCustom toHome={'/'} toCart={'/cart'} cartNumber={cartNumber}/>
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home cartNumber={cartNumber} onCartNumber={handleCartNumber}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
