import React from "react"
import { Container } from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <h3>Welcome to MERN Shop</h3>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default App
