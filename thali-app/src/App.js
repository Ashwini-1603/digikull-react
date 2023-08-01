import Navbar from "./Components/NavBar/Navbar";
import "./App.css";
import ProductCart from "./Components/ProductCart/ProductCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Checkout from "./Components/Checkout/Checkout";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
            <Route index element={<ProductCart />}/>
            <Route path="cart" element={<Checkout />} />
        </Routes>
      
    </BrowserRouter>
  );
}

export default App;
