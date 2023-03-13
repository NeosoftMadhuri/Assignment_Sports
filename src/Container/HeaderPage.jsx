import React from 'react'
import {Container,Nav,Navbar, Image} from 'react-bootstrap'
export default function HeaderPage() {
  return (
    <>
     <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
              <h2 style={{color:"#EB2397",fontFamily:"#9CB4CC"}}>Sportzzz</h2>
              {/* <Image src='/Images/sport-img.jpeg' style={{width:"200px"}} /> */}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/" active>Home</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
    </>
  )
}
