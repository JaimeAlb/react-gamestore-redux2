// import './App.css';

import Productos from './containers/Productos';
import Layout from './hoc/layout/Layout';

// asdfasdfasfasdf
function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Layout>
        <Productos/>
        </Layout>
      </header>
    </div>
  );
}

export default App;
