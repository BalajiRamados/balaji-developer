import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";


const Navbar = () => {
  return (
    <>
      <Container className="p-navbar-container" fluid="md">
        <Row>
          <Col>
            <div className="p-navbar-logo p-navbar-links-container">
              <img src="" alt="" />
              <Link className="p-navlink" to="/">Me</Link>
            </div>
          </Col>
          <Col>
            <Row className="p-navbar-links-row">
              <Col>
                <nav className="p-navbar-links-container">
                  {/* <Link className="p-navlink" to="/">Home</Link> */}
                  <Link className="p-navlink" to="/about">About</Link>
                  <Link className="p-navlink" to="/projects">Projects</Link>
                  <Link className="p-navlink" to="/contact">Contact</Link>
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

