import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const styles = {
    navbar: {
        backgroundColor: '#6080bb'
    },
    navbarBrand: {
        color: '#fff',
        cursor: 'pointer'
    }
}

const Header = () => (
    <Navbar style={styles.navbar}>
        <Navbar.Brand as={Link} to="/" style={styles.navbarBrand}>Luuna</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/usuarios">Usuarios</Nav.Link>
                <Nav.Link as={Link} to="/repositorios">Repositorios</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
  
  export default Header;