import { Collapse } from 'bootstrap'
import React from 'react'
import { Col, Container, Nav, Navbar, NavDropdown, Row } from 'react-bootstrap'
import '../components/style.css'

function Index() {
    return (
      <div>
        <div className="hero-image">
          <div className="nav-bar">
              <Navbar collapseOnSelect expand="lg" bg="transparent" variant="dark">
                  <Container>
                  <Navbar.Brand href="#home">Company Logo</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                      <Nav.Link href="#deets">HOME</Nav.Link>
                      <Nav.Link href="#deets">ABOUT</Nav.Link>
                      <Nav.Link href="#deets">SERVICES</Nav.Link>
                      <Nav.Link href="#deets">PORTFOLIO</Nav.Link>
                      <Nav.Link href="#deets">TESTINOMIALS</Nav.Link>
                      <Nav.Link href="#deets">BLOG</Nav.Link>
                      <Nav.Link href="#deets">CONTACT US</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                  </Container>
                </Navbar>
          </div>
          <div className="header">
              <h4 className="mt-5">WE ARE AT BAKERS</h4>
              <h1 className="mt-3">STARRTING A NEW JOURNEY</h1>
              <p className="mt-3">simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                when an unknown printer took a galley of type and scrambled it to make a type specimen book  and scrambled it to make a type specimen book  and scrambled it to make a type specimen book..</p>
              <div className="mt-3">
                 <button className="d-now">Download now</button> &emsp;<button className="Learn-more">Learn More</button>
              </div>
              <img src="https://cosycorner.co.nz/wp-content/uploads/revslider/slider-1/white-down-arrow-png-2.png"/>
          </div>
          </div>

          <div className="services">
              <Row>
                 <Col lg={3}>
                  <div className="box">
                    <img src="https://evolveyoursuccess.com/wp-content/uploads/2019/12/lightbulb-icon-png-icon-transparent-light-bulb-png.png" alt=""/>
                    <h4>Creative concept</h4>
                    <p>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                  </div>
                 </Col>
                 <Col lg={3}>
                 <div className="box">
                    <img src="https://img.icons8.com/ios/500/note.png" alt=""/>
                    <h4>Amazing design</h4>
                    <p>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                  </div>
                 </Col>
                 <Col lg={3}>
                 <div className="box">
                    <img src="data:image/png;base64,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" alt=""/>
                    <h4>Cost effective</h4>
                    <p>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                  </div>
                 </Col>
                 <Col lg={3}>
                 <div className="box">
                    <img src="data:image/png;base64,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" alt=""/>
                    <h4>Secure</h4>
                    <p>imply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                  </div>
                 </Col>
              </Row>
          </div>
        </div>
    )
}

export default Index
