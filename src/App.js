// import './App.css';

import Productos from './containers/Productos';
import Layout from './hoc/layout/Layout';

function App () {
  return (
    <div>
        <Layout>
        <Productos/>
        </Layout>
    </div>
  );
}

export default App;
