import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "@mui/material/Button";
import "../Styles/Navbar.css";

const navbar = () => {
  return (
    <div>
      <div className="style">
        <Navbar className="" bg="light" expand="lg">
          <Container className="header">
            <Navbar.Brand className="name" href="#home">
              AR SHAKIR
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#product">Services</Nav.Link>
                <NavDropdown
                  href="#product"
                  title="Product"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#product">Esewa</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Khalti</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    IME Pay
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Murugo</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Templates" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#blog">Blog</Nav.Link>
                <Nav.Link href="#FAQ">FAQ</Nav.Link>

                <Button className="vn" variant="text" href="">
                  SignIn
                </Button>
                <Button className="btn" variant="contained">
                  Start Free
                </Button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

export default navbar;
