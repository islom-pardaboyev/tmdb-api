import React, { useEffect, useState } from "react";
import { useAxios } from "../hooks/useAxios";
import { API_KEY, TOKEN } from "../hooks/useEnv";
import MovieCard from "../components/MovieCard";
import { Pagination } from "@mui/material";

function Popular() {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [movieData, setMovieData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  useEffect(() => {
    useAxios()
      .get(
        `/movie/popular?language=en-US&page=${page}?api_key=${API_KEY}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
          },
        }
      )
      .then((res) => {
        setMovieData(res.data.results);
        setTotalPages(res.data.total_pages);
          setIsLoading(false);
      });
  }, [page]);
  return (
    <>
      {loading ? (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          Loading...
        </div>
      ) : (
        <main>
          <div className="container grid grid-cols-12 mt-10 justify-center gap-6">
            {movieData.map((item) => (
              <MovieCard key={item.id} item={item} />
            ))}
          </div>
          <div className="flex items-center justify-center py-5">
            <Pagination
              onChange={(a, b) => {
                setPage(b);
              }}
              count={totalPages}
            />
          </div>
        </main>
      )}
    </>
  );
}

export default Popular;
