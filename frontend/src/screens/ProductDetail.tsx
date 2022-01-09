import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { IProduct } from "./Home";
import ProductCard from "../components/ProductCard";

const productDefault: IProduct = {
  id: 0,
  name: "",
  description: "",
  img: "",
  price: 0,
  rating: 0,
};

export default function ProductDetail() {
  const [product, setProduct] = useState<IProduct>(productDefault);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/product/${id}`);
        const jsonData = await response.json();

        setProduct(jsonData.payload);
        setLoaded(true);
      } catch (err: any) {
        console.error(err.message);
      }
    };

    getProduct();
  }, [id]);

  console.log(product);

  if (!isLoaded) {
    return <h1>Loading...</h1>;
  }

  return (
    <h1>
      <ProductCard
        id={product.id}
        name={product.name}
        img={product.img}
        description={product.description}
        price={product.price}
        rating={product.rating}
      />
    </h1>
  );
}
