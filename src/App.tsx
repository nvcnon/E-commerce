import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import StorePage from "./pages/StorePage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/store" element={<StorePage />} />
        </Routes>
    </>
  );
}

export default App;
