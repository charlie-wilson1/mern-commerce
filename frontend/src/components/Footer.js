import React from "react"
import { Container, Row, Col } from "react-bootstrap"

const Footer = () => {
  return (
    <footer>
      <Container>
        <hr />
        <Row>
          <Col className="text-center py-3">Copyright &copy; MERN Shop</Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
