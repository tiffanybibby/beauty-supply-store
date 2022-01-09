import React, { Fragment } from "react";
import { Routes, Route } from "react-router";
import Home from "./screens/Home";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ProductDetail from "./screens/ProductDetail";

function App() {
  return (
    <Fragment>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/products" element={<Products />}/> */}
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
        <Footer />
    </Fragment>
  );
}

export default App;
