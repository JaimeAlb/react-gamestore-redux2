// import './App.css';
import React, { useState } from 'react';

import Productos from './containers/Productos';
import Layout from './hoc/layout/Layout';

function App () {
  const [cartNumber, setCartNumber] = useState(0);
  return (
    <div>
      <Layout cartNumber={cartNumber}>
        <Productos cartNumber={cartNumber} handleCartNumber={cartNumber => setCartNumber(cartNumber)} />
      </Layout>
    </div>
  );
}

export default App;
