import { Navbar, Container } from 'react-bootstrap';
import LoginComp from './login/LoginComp';

const NavbarComp = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <LoginComp />
            </Container>
        </Navbar>
    );
}

export default NavbarComp;