import { Component } from "react";
import "./navbar.css";
import { Navbar, Nav, Container } from "react-bootstrap";

class Navigation extends Component {
  state = {};
  render() {
    return (
      <div id="navbar home" >
        <Navbar expand="sm" bg="warning">
          <Container>
            <Navbar.Brand href="#home">Mobihub!</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-nav" />
            <Navbar.Collapse id="navbar-nav" className="justify-content-end">
              <Nav>
                <Nav.Link href="#home" id="hoee">Home</Nav.Link>
                <Nav.Link href="#about" >About</Nav.Link>
                <Nav.Link href="#contact">Countact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
