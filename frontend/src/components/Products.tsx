import React, { useState, useEffect } from "react";
import axios from "axios";

interface IProduct {
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
  // console.log(products[0].name);
  // console.log(products[0].id);
  // console.log(products[0].price);
  // console.log(products[0].img);

  return (
    <>
      <h2>Products</h2>

      {products.map((product: IProduct) => (
        <li key={product.id}>
          {product.name} <br /> <br />
          {product.description} <br /> <br />
          {product.price} <br /> <br />
          {product.rating} <br /> <br />
        </li>
      ))}
    </>
  );
}
