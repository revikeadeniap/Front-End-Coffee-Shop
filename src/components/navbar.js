import logo from './../assets/images/logo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function navbar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" className='shadow nav-bg py-2'>
          <Container>
            <Navbar.Brand href="#home">
                <img
                  src={logo}
                  width="100"
                  height="80"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto align-self-center flex-fill d-lg-flex justify-content-lg-between">
                <Nav className='flex-fill'>   
                    <Nav className='nav navbar-nav d-flex justify-content-between mx-lg-auto'>
                        <Nav.Item className="nav-item">
                            <Nav.Link className='fs-3' href="home">home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item ms-5">
                            <Nav.Link className='fs-3' href="about">about</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item ms-5">
                            <Nav.Link className='fs-3' href="menu">menu</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item ms-5">
                            <Nav.Link className='fs-3' href="products">products</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item ms-5">
                            <Nav.Link className='fs-3' href="owners">owners</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className="nav-item ms-5">
                            <Nav.Link className='fs-3' href="reservasi">reservasi</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

    );
  }
  
  export default navbar;