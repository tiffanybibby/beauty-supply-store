import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as BeautySupplyLogo } from "../assets/beauty_supply_logo2.svg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const Nav: React.FC<Nav> = ({
  cartProducts,
  getTotalProducts,
  setCartOpen,
}) => {
  return (
    <Box sx={{ flexGrow: 1, mb: 8 }} aria-label="nav">
      <AppBar position="static" sx={{ backgroundColor: "rgb(12	88	212	)" }}>
        <Toolbar>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button onClick={() => setCartOpen(true)}>
              <Badge
                badgeContent={getTotalProducts(cartProducts)}
                color="error"
              >
                <AddShoppingCartIcon />
              </Badge>
            </Button>
          </Box>
          <Box sx={{ flexGrow: 1, ml: 5 }} aria-label="logo">
            <Link to="/">
              <BeautySupplyLogo style={{ width: "200px", height: "auto" }} />
            </Link>
          </Box>
          <Typography>Login</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
