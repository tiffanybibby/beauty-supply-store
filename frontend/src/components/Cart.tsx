import CartProduct, { formatPrice } from "./CartProduct";
import { Grid, Typography, Card, Button } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";


const Cart: React.FC<CartProps> = ({
  cartProducts,
  addToCart,
  removeFromCart,
}) => {
  const calculateTotal = (products: IProduct[]) =>
    products.reduce(
      (ack: number, product) => ack + product.quantity * product.price,
      0
    );

  const stripePromise = loadStripe('pk_test_51GrR7VK3BlH77gBm0wTZ12X0WVVgQz3HEIAITVwpTqMKTYee1Z4wR7DNXap8esZhK7brqHC3mM1ePx6TIqHxX95S007KBSLznf');

  const handleClick = async (event: any) => {
    const { sessionId } = await fetch(
      "http://localhost:3001/create-checkout-session",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ quantity: 1 }),
      }
    ).then((res) => res.json());

    const stripe = await stripePromise;
    const { error } = await stripe!.redirectToCheckout({
      sessionId: sessionId,
    });
  };

  return (
    <Card
      sx={{
        padding: 3,
        maxWidth: { xs: 300, md: 345 },
        minWidth: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
        overflow: "scroll",
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        Your Shopping Cart
      </Typography>
      {cartProducts.length === 0 ? <p>No products in cart.</p> : null}
      <Grid
        aria-label="product card"
        justifyContent="flex-end"
        alignItems="flex-end"
        margin={10}
        rowSpacing={8}
        columnSpacing={{ xs: 1 }}
      >
        {cartProducts.map((product) => (
          <CartProduct
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        ))}
      </Grid>
      <Typography
        variant="h4"
        fontWeight="bold"
        justifyContent="flex-end"
        alignItems="flex-end"
      >
        Total: {formatPrice(calculateTotal(cartProducts))}
      </Typography>

      <Button role="link" onClick={handleClick}>
        Checkout
      </Button>
    </Card>
  );
};

export default Cart;
