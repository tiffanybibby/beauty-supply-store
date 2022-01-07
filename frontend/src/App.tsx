import React, { Fragment } from "react";
import { Route } from "react-router";
import Products from "./components/Products";


function App() {

  
  return (
    <Fragment>
          {/* <Route path="/"/>
          <Route path="/products/"/>
          <Route path="/product/:productId"/> */}
      <Products />
    </Fragment>
  );
}

export default App;