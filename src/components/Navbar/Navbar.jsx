import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Autocomplete, TextField } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function Navbar() {
  const options = [
    { label: "The Godfather", id: 1 },
    { label: "Pulp Fiction", id: 2 },
  ];
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="py-2" color="">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <LiveTvIcon className="scale-[1.5]" />
          </IconButton>
          <Typography
            className="space-x-6"
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <NavLink
              to={"/"}
              className={"p-2 text-[18px] rounded-xl duration-300"}
            >
              Now Playing
            </NavLink>
            <NavLink
              to={"/popular"}
              className={"p-2 text-[18px] rounded-xl duration-300"}
            >
              Popular
            </NavLink>
            <NavLink
              to={"/top-rated"}
              className={"p-2 text-[18px] rounded-xl duration-300"}
            >
              Top Rated
            </NavLink>
            <NavLink
              to={"/up-coming"}
              className={"p-2 text-[18px] rounded-xl duration-300"}
            >
              Up Coming
            </NavLink>
          </Typography>
          <Autocomplete
            disablePortal
            options={options}
            sx={{ width: 300 }}
            size="medium"
            renderInput={(params) => <TextField {...params} label="Movie" />}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
