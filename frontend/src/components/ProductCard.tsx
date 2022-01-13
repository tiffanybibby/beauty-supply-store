import React, { FC } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Rating,
} from "@mui/material";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddIcon from "@mui/icons-material/Add";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";


interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const ProductCard: React.FC<ProductProps> = ({id, name, img, description, price, rating}) => {
  
  function formatPrice(price: number) {
    return "$" + (price / 100).toFixed(2) + " USD";
  }

  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "50%",
    maxHeight: "40%",
  });

  // export default function HalfRating() {
  //   return (
  //     <Stack spacing={1}>
  //       <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
  //       <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
  //     </Stack>
  //   );
  // }

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: 1,
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "row", mb: 8 }}>
        <Img src={img} alt={name} />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardHeader title={name} />
          <CardActions sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>

            {/* <Stack spacing={1}> */}
            {/* <Rating name="half-rating" defaultValue={rating} precision={0.5} /> */}
            <Rating
              name="half-rating-read"
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
            {/* </Stack> */}
          <Typography variant="body1" fontWeight="bold" fontSize="medium">
            {formatPrice(price)}
          </Typography>
            {/* <IconButton onClick={() => handleAddToCart(product)} aria-label="add to cart">
              <AddIcon fontSize="medium" />
            </IconButton> */}
          </CardActions>
          <Typography paragraph>{description}</Typography>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon fontSize="large" />
          </ExpandMore>
        </Box>
      </Box>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography fontWeight="bold" paragraph>
            Description:
          </Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default ProductCard;
