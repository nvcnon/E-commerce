import { Route, Routes } from "react-router-dom";
import StorePage from "./pages/StorePage";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./components/routes/PrivateRoute";
import MainLayout from "./components/layout/MainLayout";

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
