import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { IMG_URL } from "../hooks/useEnv";
import StarIcon from "@mui/icons-material/Star";
import { Button } from "antd";

export default function MovieCard({ item }) {
  return (
    <div className="col-span-3 p-5 bg-neutral-300 rounded-md">
      <img src={`${IMG_URL}/${item.poster_path}`} alt="" />
      <div className="mt-5">
        <h1 className="font-bold text-xl mb-3">{item.original_title}</h1>
        <p className="line-clamp-4">{item.overview}</p>
        <Button type="primary" className="mt-5">More...</Button>
      </div>
    </div>
  );
}
