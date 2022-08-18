import * as React from "react";
import {
  AppBar,
  Box,
  Grid,
  Divider,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";

const Header = () => {
  const style = {
    mr: 2,
    color: "gray",
    backgroundColor: "white",
    textTransform: "none",
    "&:hover": {
      mr: 2,
      color: "black",
      backgroundColor: "white",
    },
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha("#eee", 0.15),
    "&:hover": {
      backgroundColor: alpha("#eee", 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "80ch",
        "&:focus": {
          width: "80ch",
        },
      },
    },
  }));
  return (
    <Grid>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "white" }}>
          <Toolbar>
            <WbTwilightIcon
              sx={{
                display: { xs: "none", md: "flex" },
                mr: 2,
                color: "black",
              }}
              fontSize="large"
            />
            <Search sx={{ mr: 2, borderRadius: 5, backgroundColor: "#eee" }}>
              <SearchIconWrapper sx={{ color: "gray" }}>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search free high resolution images"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Button sx={style}>Explore</Button>
            <Button sx={style}>Advertise</Button>
            <Button sx={style}>Blog</Button>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ mr: 2 }}
            />
            <Button
              sx={[
                style,
                {
                  mr: 0,
                  "&:hover": {
                    mr: 0,
                  },
                },
              ]}
            >
              Login
            </Button>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { color: "gray" } }}
            >
              /
            </Typography>
            <Button sx={style}>SignUp</Button>
            <Button
              sx={[
                style,
                {
                  borderColor: "gray",
                  "&:hover": {
                    borderColor: "black",
                  },
                },
              ]}
              variant="outlined"
            >
              Submit a photo
            </Button>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton size="large" edge="start" aria-label="menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>
    </Grid>
  );
};
export default Header;
