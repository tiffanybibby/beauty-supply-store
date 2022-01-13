import { Fragment, useState, useEffect } from "react";
import { useQuery } from 'react-query';
import axios from 'axios'
import { Link } from "react-router-dom";
import ProductCards from "../components/ProductCards";
import { Grid, Drawer, Button, Badge, Box } from "@mui/material";
import { getProducts } from '../services/products'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import LinearProgress from '@material-ui/core/LinearProgress';
import Cart from '../components/Cart';
import api from '../services/apiConfig'



export default function Products() {
  const [products, setProducts] = useState([] as IProduct[]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([] as IProduct[]);


  const getProducts = async () => {
    try {
      const response = await api.get('/products');
      console.log(response.data.payload)
      setProducts(response.data.payload);
      // return response.data.payload
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);


  console.log(cartProducts);
  console.log(products);
  console.log(products[0]);



  const getTotalProducts = (products: IProduct[]) =>
    products.reduce((ack: number, product) => ack + product.quantity, 0);

  const handleAddToCart = (clickedProduct: IProduct) => {
    setCartProducts(prev => {

      const isProductInCart = prev.find(product => product.id === clickedProduct.id);

      if (isProductInCart) {
        return prev.map(product =>
          product.id === clickedProduct.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      }

      return [...prev, { ...clickedProduct, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartProducts(prev =>
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

  return (
    <>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartProducts={cartProducts}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <Box sx={{ display: "flex", justifyContent: 'end' }}>
      <Button onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalProducts(cartProducts)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
        </Button>
        </Box>
      <Grid
        aria-label="product card"
        container
        justifyContent="center"
        margin={10}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((product => {
          return (

            <ProductCards
              id={product.id}
              name={product.name}
              img={product.img}
              description={product.description}
              price={product.price}
              rating={product.rating}
            quantity={product.quantity}
              handleAddToCart={handleAddToCart}
              product={product}

            />
          )
        }))}
      </Grid>
    </>
  );
}
