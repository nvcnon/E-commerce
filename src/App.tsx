import Container from "./components/layout/Container"
import Navbar from "./components/layout/Navbar"
import HeroBanner from "./features/home/components/HeroBanner"

function App() {
  return (
    <>
    <Container>
      <Navbar /> 
    </Container>
      <HeroBanner /> 
    </>
  )
}

export default App
