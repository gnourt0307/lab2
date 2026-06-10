import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Cart } from "react-bootstrap-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";

const navLinks = ["Home", "Products", "Men", "Women", "Contact"];

function Header({ onNavigate, activePage, cartQuantity = 0 }) {
  const [activeLink, setActiveLink] = useState(activePage || navLinks[0]);
  const currentActiveLink = activePage || activeLink;

  const handleNavigate = (link) => {
    setActiveLink(link);

    if (onNavigate) {
      onNavigate(link);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand
          href="#home"
          className="d-flex align-items-center gap-2 fw-semibold"
          onClick={() => handleNavigate("Home")}
        >
          <img
            src={logo}
            alt="Shop Fashion"
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle"
          />
          <span>Shop Fashion</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="shop-fashion-navbar" />
        <Navbar.Collapse id="shop-fashion-navbar">
          <Nav className="ms-auto">
            {navLinks.map((link) => (
              <Nav.Link
                key={link}
                href={`#${link.toLowerCase()}`}
                active={currentActiveLink === link}
                className="px-lg-3"
                onClick={() => handleNavigate(link)}
              >
                {link}
              </Nav.Link>
            ))}
            <Nav.Link
              href="#cart"
              className="header-cart-link px-lg-3 d-flex align-items-center gap-1"
              aria-label={`Shopping cart with ${cartQuantity} items`}
            >
              <Cart aria-hidden="true" />
              <span>({cartQuantity})</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
