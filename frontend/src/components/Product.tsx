import Button from '@material-ui/core/Button';




const Product: React.FC<AddToCartProps> = ({ product, handleAddToCart }) => (
  <>
    <img src={product.img} alt={product.name} />
    <div>
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <h3>${product.price}</h3>
    </div>
    <Button onClick={() => handleAddToCart(product)}>Add to cart</Button>
</>
);

export default Product;
