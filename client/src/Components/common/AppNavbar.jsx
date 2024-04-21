import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Navbar, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



function AppNavbar() {
    const navigate = useNavigate();  

    const goTOSignUp=()=>{
        navigate("/signup")
    }
    const goToLogin=()=>{
        navigate("/signin")
    }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
                       
          </Nav>
          <Nav className='d-flex gap-3'>
            <Button onClick={goTOSignUp}>Sign Up</Button>
            <Button onClick={goToLogin}>Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;