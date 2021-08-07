import Navbar1 from '../../components/Navigation/Navbar/Navbar1';
import Aux1 from '../auxiliar/Aux1';

const Layout = (props) => {
  return (
    <Aux1>
      <Navbar1></Navbar1>
      <main>
        {props.children}
      </main>
    </Aux1>
  );
};

export default Layout;
