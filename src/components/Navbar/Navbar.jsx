import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AutoComplete } from "antd";
import { useAxios } from "../../hooks/useAxios";
import { API_KEY } from "../../hooks/useEnv";
import "./Navbar.css";

export default function Navbar() {
  const [options, setOptions] = React.useState([]);
  const axiosInstance = useAxios();
  const navigate = useNavigate();

  const handleSearchMovie = (value) => {
    if (value) {
      axiosInstance
        .get(
          `/search/movie?query=${value}&include_adult=false&api_key=${API_KEY}`
        )
        .then((res) => {
          const results = res.data.results.map((item) => ({
            value: item.original_title,
            id: item.id,
          }));
          setOptions(results);
        })
        .catch((error) => {
          console.error("Error fetching movie data:", error);
        });
    } else {
      setOptions([]);
    }
  };

  const handleChooseMovie = (a, b) => {
    navigate(`/${b.id}`);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="py-2">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Link to={'/'}>
              <LiveTvIcon className="scale-[1.5]" />
            </Link>
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
              className={"p-2 text-[18px] rounded-xl duration-300 "}
            >
              Popular
            </NavLink>
            <NavLink
              to={"/top-rated"}
              className={"p-2 text-[18px] rounded-xl duration-300 "}
            >
              Top Rated
            </NavLink>
            <NavLink
              to={"/up-coming"}
              className={"p-2 text-[18px] rounded-xl duration-300 "}
            >
              Up Coming
            </NavLink>
          </Typography>
          <AutoComplete
            onSearch={handleSearchMovie}
            allowClear
            options={options}
            onSelect={handleChooseMovie}
            style={{ width: 300 }}
            placeholder="Search movies"
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
