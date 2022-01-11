import {
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  CardActionArea,
  Rating,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { FC } from "react";
import { IProduct } from "../screens/Home";

const ProductCards: FC<IProduct> = ({
  name,
  img,
  description,
  price,
  rating,
}) => {
  function formatPrice(price: number) {
    return "$" + (price / 100).toFixed(2) + " USD";
  }

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "80%",
  });

  return (
    <Card
      sx={{
        margin: 2,
        maxWidth: { xs: 300, md: 345 },
        minWidth: { xs: 300, md: 345 },
        height: "450px",
      }}
    >
      <CardActionArea>
        <CardMedia sx={{ width: "100%", height: 230 }}>
          <Img alt={name} src={img} />
        </CardMedia>
        <CardContent>
          <Typography
            gutterBottom
            fontWeight="bold"
            variant="subtitle2"
            component="div"
            sx={{ height: "88px" }}
          >
            {name}
          </Typography>
          <Rating
            name="half-rating-read"
            defaultValue={rating}
            precision={0.5}
            readOnly
          />
          <Typography
            variant="body1"
            fontWeight="bold"
            fontSize="medium"
          >
            {formatPrice(price)}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button type="submit">Add to Cart</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
};

export default ProductCards;
