import { Fragment, useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Products from "./screens/Products";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import ProductDetail from "./screens/ProductDetail";
import { Drawer } from "@mui/material";
// import Home from "./screens/Home";
// import Checkout from "./screens/Checkout";
import Cart from "./components/Cart";

function App() {
  const [cartProducts, setCartProducts] = useState([] as IProduct[]);
  const [cartOpen, setCartOpen] = useState(false);

  let localCart = JSON.parse(localStorage["cartProducts"]);

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
  }, [cartProducts]);

  useEffect(() => {
    if (localCart) setCartProducts(localCart);
  }, []);

  console.log(cartProducts);

  const getTotalProducts = (products: IProduct[]) =>
    products.reduce((ack: number, product) => ack + product.quantity, 0);

  const handleAddToCart = (clickedProduct: IProduct) => {
    setCartProducts((prev) => {
      const isProductInCart = prev.find(
        (product) => product.id === clickedProduct.id
      );

      if (isProductInCart) {
        return prev.map((product) =>
          product.id === clickedProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [...prev, { ...clickedProduct, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartProducts((prev) =>
      prev.reduce((ack, product) => {
        if (product.id === id) {
          if (product.quantity === 1) return ack;
          return [...ack, { ...product, quantity: product.quantity - 1 }];
        } else {
          return [...ack, product];
        }
      }, [] as IProduct[])
    );
  };

  console.log(cartProducts);

  return (
    <Fragment>
      <Nav
        getTotalProducts={getTotalProducts}
        cartProducts={cartProducts}
        // cartOpen={cartOpen}
        setCartOpen={setCartOpen}
      />
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartProducts={cartProducts}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
          getTotalProducts={getTotalProducts}
          handleAddToCart={handleAddToCart}
        />
      </Drawer>
      <Routes>
        <Route
          path="/"
          element={
            <Products
              handleAddToCart={handleAddToCart}
              cartProducts={cartProducts}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
              getTotalProducts={getTotalProducts}
            />
          }
        />
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
