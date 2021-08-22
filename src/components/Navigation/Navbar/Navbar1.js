import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import {
  // BrowserRouter as Router,
  Link
  // Route,
  // Switch
} from 'react-router-dom';

const Navbar1 = (props) => {
  const { cartNumber, toHome, toCart } = props;
  return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={toHome}>Home</Nav.Link>
              <Nav.Link as={Link} to={toCart}>Cart</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <span style={{ color: 'white' }}>{cartNumber}</span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Navbar1;
