// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Navbar1 from '../../components/Navigation/Navbar/Navbar1';
import Productos from '../../containers/Productos';

const Layout = () => {
  return (
    <>
      <Navbar1></Navbar1>
      <Productos></Productos>
    </>
  );
};

export default Layout;
