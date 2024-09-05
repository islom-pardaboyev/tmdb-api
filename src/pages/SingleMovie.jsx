import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAxios } from "../hooks/useAxios";
import { API_KEY, IMG_URL, TOKEN } from "../hooks/useEnv";
import YouTube from "react-youtube";
import ActorsCart from "../components/ActorsCart";

function SingleMovie() {
  const { id } = useParams();
  const [singleMoviesData, setSingleMoviesData] = useState([]);
  const [singleVideos, setSingleVideos] = useState([]);
  const [singleMovieActors, setSingleMovieActors] = useState([]);

  useEffect(() => {
    useAxios()
      .get(`/movie/${id}?api_key=${API_KEY}`)
      .then((res) => {
        setSingleMoviesData(res.data);
        document.title = res.data.title;
      });
    useAxios()
      .get(`/movie/${id}/videos?language=en-US?api_key=${API_KEY}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => setSingleVideos(res.data));
    useAxios()
      .get(`/movie/${id}/credits?language=en-US?api_key=${API_KEY}`, {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => setSingleMovieActors(res.data));
  }, [id]);

  console.log(singleMoviesData);

  return (
    <section className="mt-5">
      <div className="p-10 rounded-lg relative">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={`${IMG_URL}/${singleMoviesData.backdrop_path}`}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/70"></div>

        <div className="relative z-10 container flex gap-6">
          <img
            src={`${IMG_URL}/${singleMoviesData.poster_path}`}
            alt=""
            className="rounded-xl"
            width={350}
          />
          <div className="flex flex-col justify-between text-white">
            <h1 className="text-3xl font-bold ">
              {singleMoviesData.title}{" "}
              <span className="font-normal">
                ({singleMoviesData.release_date?.substring(0, 4)})
              </span>
            </h1>
            <div className="flex">
              <p className="mr-1">
                {singleMoviesData.release_date?.split("-").reverse().join("/")}
              </p>
              <p>({singleMoviesData.origin_country})</p>
              <span className="mx-3">&#8226;</span>

              <p>
                {singleMoviesData.genres?.map((item, index) => (
                  <span key={index}>
                    {item.name}
                    {index < singleMoviesData.genres.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div
                className={`border-2 w-[200px] ${
                  singleMoviesData.vote_average?.toFixed(1) * 10 >= 70
                    ? "border-green-500"
                    : singleMoviesData.vote_average?.toFixed(1) * 10 >= 40
                    ? "border-yellow-500"
                    : "border-red-500"
                } rounded-full relative`}
              >
                <div
                  className={`h-[3px] ${
                    singleMoviesData.vote_average?.toFixed(1) * 10 >= 70
                      ? "bg-green-500"
                      : singleMoviesData.vote_average?.toFixed(1) * 10 >= 40
                      ? "bg-yellow-500"
                      : "bg-red-500"
                  } p-3 rounded-full`}
                  style={{
                    width: `${singleMoviesData.vote_average?.toFixed(1) * 10}%`,
                  }}
                ></div>
                <p className="absolute top-0 right-[50%] -translate-x-1/2">
                  {singleMoviesData.vote_average?.toFixed(1).split(".")}%
                </p>
              </div>
              <p>User Score</p>
            </div>
            <p className="italic text-neutral-300">
              {singleMoviesData.tagline}
            </p>
            <h1 className="font-bold text-4xl">Overview</h1>
            <p className="font-light text-slate-300">
              {singleMoviesData.overview}
            </p>
          </div>
        </div>
      </div>
      <div className="container my-3">
        <h1 className="font-bold text-xl">Top Billed Cast</h1>
        <div className="flex">
          <div className="flex gap-2 overflow-x-auto mt-3 w-[70vw]">
            {singleMovieActors.cast?.map((item) => (
              <ActorsCart item={item} key={item.id} />
            ))}
          </div>
          <div className="flex flex-col gap-7 p-7">
            <p className="font-bold capitalize flex flex-col">
              status
              <span className="font-normal">{singleMoviesData.status}</span>
            </p>
            <p className="font-bold capitalize flex flex-col">
              original language
              <span className="font-normal">
                {singleMoviesData?.spoken_languages?.[0]?.english_name}
              </span>
            </p>
            <p className="font-bold capitalize flex flex-col">
              budget
              <span className="font-normal">
                ${singleMoviesData.budget?.toLocaleString()}
              </span>
            </p>
            <p className="font-bold capitalize flex flex-col">
              revenue
              <span className="font-normal">
                ${singleMoviesData.revenue?.toLocaleString()}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <h1 className="font-bold text-xl my-4">Videos</h1>

        <div className="grid grid-cols-12 gap-5">
          {singleVideos?.results?.map((item) => (
            <YouTube key={item.id} className="col-span-6" videoId={item.key} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SingleMovie;

{
}
