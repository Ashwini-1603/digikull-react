import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import ProductCart from "./Components/ProductCart/ProductCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./Components/CartPage/CartPage";
function App() {
  return (
    <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<ProductCart />}/>
            <Route path="cart" element={<CartPage />} />
          </Route>
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
