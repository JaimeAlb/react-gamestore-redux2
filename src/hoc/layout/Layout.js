import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarCustom from '../../components/Navigation/Navbar/NavbarCustom';
import Aux1 from '../auxiliar/Aux1';

const Layout = (props) => {
  const { homeLink, cartNumber } = props;
  return (
    <Aux1>
      <NavbarCustom home={ homeLink } cartNumber={cartNumber}></NavbarCustom>
      <main>
        {props.children}
      </main>
    </Aux1>
  );
};

export default Layout;
