import { Box, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "120px",
        backgroundColor: "rgb(5	59 136)",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography>
        &copy; {new Date().getFullYear()}{" "}
        <Link
          style={{ color: "inherit" }}
          href="https://github.com/tiffanybibby/beauty-supply-store"
        >
          BSS.
        </Link>{" "}
        All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
