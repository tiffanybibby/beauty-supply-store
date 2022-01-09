import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCards from "../components/ProductCards";
import { Grid } from "@mui/material";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  img: string;
  price: number;
  rating: number;
}

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/products");
      const jsonData = await response.json();

      setProducts(jsonData.payload);
    } catch (err: any) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  console.log(products[0]);

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
        {products.map((product: IProduct) => (
          <>
            <Link
              to={`/product/${product.id}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ProductCards
                id={product.id}
                name={product.name}
                img={product.img}
                description={product.description}
                price={product.price}
                rating={product.rating}
              />
            </Link>
          </>
        ))}
      </Grid>
    </>
  );
}
