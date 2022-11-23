// import React from 'react'
// import CartWidget from '../CartWidget/CartWidget'
// const NavBar = () => {
//   return (
//     <div>
//         <nav>
//             <ul>
//                 <li>home</li>
//                 <li>terror</li>
//                 <li>drama</li>
//                 <li>comedia</li>
//             </ul>
//         </nav>
//         {/* <CartWidget /> */}
//     </div>
//   )
// }

// export default NavBar
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function BasicExample() {
  return (
    <div>
    <Navbar bg="light" expand="xl">
      <Container>
        <Navbar.Brand href="#home">CINELIFE</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            
            <NavDropdown title="series" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">terror</NavDropdown.Item>
              <br></br>
              <NavDropdown.Item href="#action/3.2">drama</NavDropdown.Item>
              <br></br>
              <NavDropdown.Item href="#action/3.3">comedia</NavDropdown.Item>
              
            </NavDropdown>

            <NavDropdown title="peliculas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">terror</NavDropdown.Item>
              <br></br>
              <NavDropdown.Item href="#action/3.2">drama</NavDropdown.Item>
              <br></br>
              <NavDropdown.Item href="#action/3.3">comedia</NavDropdown.Item>
              
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
    </div>
  );
}

export default BasicExample;