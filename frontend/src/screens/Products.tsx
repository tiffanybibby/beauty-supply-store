import { useState, useEffect } from "react";
import ProductCards from "../components/ProductCards";
import { Grid } from "@mui/material";
// import { getProducts } from '../services/products'
import Cart from "../components/Cart";
import api from "../services/apiConfig";

const Products: React.FC<CartProps> = ({
  cartProducts,
  addToCart,
  removeFromCart,
  handleAddToCart,
}) => {
  const [products, setProducts] = useState([] as IProduct[]);

  const getProducts = async () => {
    try {
      const response = await api.get("/products");
      console.log(response.data.payload);
      setProducts(response.data.payload);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Grid
        aria-label="product card"
        container
        justifyContent="center"
        margin={10}
        rowSpacing={2}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {products.map((product) => {
          return (
            <ProductCards
              id={product.id}
              name={product.name}
              img={product.img}
              description={product.description}
              price={product.price}
              rating={product.rating}
              quantity={product.quantity}
              product={product}
              handleAddToCart={handleAddToCart}
            />
          );
        })}
      </Grid>
    </>
  );
};

export default Products;
