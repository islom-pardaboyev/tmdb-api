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
import { useNavigate } from "react-router-dom";

export default function MovieCard({ item }) {
  const navigate = useNavigate()
  return (
    <div data-aos="fade-up" data-aos-duration="1300" className="col-span-3 p-5 bg-neutral-300 rounded-md">
      <img src={`${IMG_URL}/${item.poster_path}`} alt="" />
      <div className="mt-5">
        <h1 className="font-bold text-xl mb-3">{item.original_title}</h1>
        <p className="line-clamp-4">{item.overview}</p>
        <Button type="primary" className="mt-5" onClick={() => navigate(`/${item.id}`)}>More...</Button>
      </div>
    </div>
  );
}
