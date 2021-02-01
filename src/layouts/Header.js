import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
        <Link href="/">
            <Navbar.Brand style={styles.navbarBrand}>Luuna</Navbar.Brand>
        </Link>
    </Navbar>
  );
  
  export default Header;