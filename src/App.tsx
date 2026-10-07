import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Layout from "./components/layout/Layout";
import Store from "./pages/store/Store";
import ProcuctPage from "./pages/productPage/ProcuctPage";
import CartPage from "./pages/cartPage/CartPage";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import Login from "./pages/login/Login";
import { useAuthenticateContext } from "./context/authenticateContext";
import Magazine from "./pages/magazine/Magazine";
import MagazineItem from "./pages/magazineItem/MagazineItem";

function App() {

  const {isLogin} = useAuthenticateContext()

  return (
    <>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/magazine" element={<Magazine />} />
            <Route path="/magazine/:id" element={<MagazineItem />} />
            
            <Route path="/product/:id" element={<ProcuctPage />} />
            <Route path="/login" element={isLogin ? <Navigate to='/'/> : <Login /> } />
            

            <Route element={<PrivateRoute />}>
              <Route path="/cart" element={<CartPage />} />
            </Route>
          </Routes>
        </Layout>
    </>
  );
}

export default App;
