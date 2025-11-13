import { Navbar, Nav} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Contexto/AuthContext";

const NavBar = () => {
  const {usuario} = useAuthContext();
  return (
    <Navbar bg="secondary" variant="secondary" expand="md" className="p-0 ">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="justify-content-center w-100">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/carrito">Carrito</Nav.Link>
            {usuario == 'admin' && (
              <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;