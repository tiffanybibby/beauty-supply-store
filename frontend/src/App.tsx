import { Fragment } from "react";
import { Routes, Route } from "react-router";
import Products from "./screens/Products";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ProductDetail from "./screens/ProductDetail";
// import Home from "./screens/Home";
// import Checkout from "./screens/Checkout";
// import ShoppingCart from "./screens/ShoppingCart";



function App() {

  return (
    <Fragment>
        <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* <Route path="/products" element={<Products />}/> */}
        {/* <Route path="/cart" element={<ShoppingCart/>} /> */}
        {/* <Route path="/checkout" element={<Checkout />}/> */}
      </Routes>
        <Footer />
    </Fragment>
  );
}

export default App;
