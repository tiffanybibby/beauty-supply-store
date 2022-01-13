import { AppBar, Box, Toolbar, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { ReactComponent as BeautySupplyLogo } from "../assets/beauty_supply_logo2.svg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Nav = () => {
  return (
    <Box sx={{ flexGrow: 1, mb: 8 }} aria-label="nav">
      <AppBar position="static" sx={{ backgroundColor: "rgb(12	88	212	)" }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, ml: 5 }} aria-label="logo">
            <Link to="/">
              <BeautySupplyLogo style={{ width: "200px", height: "auto" }} />
            </Link>
          </Box>
          <Typography>
            Login
          </Typography>
          {/* <Link to="/cart"> */}
            {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="cart"
              sx={{ mr: 2 }}
            >
              <ShoppingCartIcon />
            </IconButton> */}
          {/* </Link> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Nav;
