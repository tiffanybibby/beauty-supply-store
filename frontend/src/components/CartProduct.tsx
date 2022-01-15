import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';


export function formatPrice(price: number) {
  return "$" + (price / 100).toFixed(2) + " USD";
}

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "20%",
  maxHeight: "40%",
});


const CartProduct: React.FC<Props> = ({ product, addToCart, removeFromCart }) => (
<>  
    <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'center' }}>
    <Typography variant="body1" fontWeight="bold" fontSize="small">
      {product.name}</Typography>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: 'space-between' }} >
        <p>Price: {formatPrice(product.price)}</p>
        <p>Total: {formatPrice((product.quantity) * (product.price))}</p>
    </Box>
      <Box sx={{ display: "flex", flexDirection: "row", justifyContent: 'space-between' }} >
        <IconButton
          onClick={() => removeFromCart(product.id)}
        >
          <RemoveCircleIcon fontSize="small" />
        </IconButton>
        <Typography variant="body1" fontWeight="bold" fontSize="large">
        {product.quantity}
          </Typography>
        <IconButton
          onClick={() => addToCart(product)}
        >
          <AddCircleIcon fontSize="small" />
        </IconButton>
    <Img src={product.img} alt={product.name} />
      </Box>
    </Box>
</>
);

export default CartProduct;
