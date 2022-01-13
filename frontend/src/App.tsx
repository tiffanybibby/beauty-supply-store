import './App.css'
import { Fragment, useState } from "react";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Products from "./screens/Products";
// import Checkout from "./screens/Checkout";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ProductDetail from "./screens/ProductDetail";
// import ShoppingCart from "./screens/ShoppingCart";



function App() {

  return (
    <Fragment>
        <Nav />
      <Routes>
        <Route path="/" element={<Products />} />
        {/* <Route path="/products" element={<Products />}/> */}
        <Route path="/product/:id" element={<ProductDetail />} />
        {/* <Route path="/cart" element={<ShoppingCart/>} /> */}
        {/* <Route path="/checkout" element={<Checkout />}/> */}
      </Routes>
        <Footer />
    </Fragment>
  );
}

export default App;
