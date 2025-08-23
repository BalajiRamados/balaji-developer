import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Navbar = () => {

  const location = useLocation();
  // const hrefLocation = window.location.href;

  return (
    <>
      <Container className="p-navbar-container" fluid="md">
        <Row>
          <Col>
            <div className="p-navbar-logo p-navbar-links-container">
              <Link 
                className={`p-navlink ${location.pathname === '/' ? 'p-navlink-active' : ''}`} 
                to="/"
              >
                Me
              </Link>
            </div>
          </Col>
          <Col>
            <Row className="p-navbar-links-row">
              <Col>
                <nav className="p-navbar-links-container">
                  {/* <Link className="p-navlink" to="/">Home</Link> */}
                  <Link 
                    className={`p-navlink ${location.pathname === '/about' ? 'p-navlink-active' : ''}`} 
                    to="/about"
                  >
                    About
                  </Link>
                  <Link 
                    className={`p-navlink ${location.pathname === '/projects' ? 'p-navlink-active' : ''}`} 
                    to="/projects"
                  >
                    Projects
                  </Link>
                  <Link 
                    className={`p-navlink ${location.pathname === '/contact' ? 'p-navlink-active' : ''}`} 
                    to="/contact"
                  >
                    Contact
                  </Link>
                </nav>
              </Col>
              {/* <Col>
                <div className="p-navbar-social-icons-container">
                  <div>
                    <FaLinkedinIn className="p-navbar-social-icons" />
                  </div>
                  <div>
                    <FaFacebookF className="p-navbar-social-icons" />
                  </div>
                  <div>
                    <FaInstagram className="p-navbar-social-icons" />
                  </div>
                </div>
              </Col> */}
              
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Navbar;

