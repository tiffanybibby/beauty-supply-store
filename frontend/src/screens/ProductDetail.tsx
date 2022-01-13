import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import api from "../services/apiConfig";
import { getProduct } from '../services/products'

const productDefault: ProductProps = {
  id: 0,
  name: "",
  description: "",
  img: "",
  price: 0,
  rating: 0,
};

export default function ProductDetail() {
  const [product, setProduct] = useState<ProductProps>(productDefault);
  const [isLoaded, setLoaded] = useState(false);
  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        const response = await getProduct(id);
        setProduct(response);
        console.log(response)
        setLoaded(true);
      }
      fetchProduct();
    }
  }, [id]
  );

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
