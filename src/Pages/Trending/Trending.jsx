import { useState } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "./trend.scss";
import TrendLoad from "./TrendLoad";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import { Link } from "react-router-dom";
const fetchTrendingMovies = async (timeWindow) => {
  const apiKey = "4506a33c6fd8b3db74243b36650bd7fb"; // Replace with your IMDb API key
  const url = `https://api.themoviedb.org/3/trending/movie/${timeWindow}?api_key=${apiKey}`;
  const response = await axios.get(url);
  return response.data.results;
};
var settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 7,
  slidesToScroll: 7,
  initialSlide: 0,
  arrow: false,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots:false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};
export default function Trending() {
  // State to control the time window (day/week)
  const [timeWindow, setTimeWindow] = useState("day");

  // Use TanStack Query to fetch trending movies
  const { data, error, isLoading } = useQuery(
    ["trendingMovies", timeWindow],
    () => fetchTrendingMovies(timeWindow)
  );

  // if (isLoading) {
  //   return <LoadingTrend/>;
  // }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <div className=" mt-4">
          <div className="d-flex text">
            <h3 className="fw-bold ">Trending</h3>
            <div className="toggle-buttons mx-4 d-flex justify-content-center">
              <button
                className={`btn ${timeWindow === "day" ? "active" : ""}`}
                onClick={() => setTimeWindow("day")}
              >
                Today
              </button>
              <button
                className={` btn ${timeWindow === "week" ? "active" : ""}`}
                onClick={() => setTimeWindow("week")}
              >
                This Week
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        {isLoading ? (
          <>
            <TrendLoad />
            <TrendLoad />
            <TrendLoad />
            <TrendLoad />
            <TrendLoad />
            <TrendLoad />
          </>
        ) : (
          <Slider {...settings}>
            {data?.map((movie) => (
              <div className="col-md-2 item mx-3" key={movie.id}>
                <Link to={`/trendDetails/${movie.id}`} className="nav-link">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                  className=" imge"
                  height={225}
                  width={150}
                  alt=""
                />
                <div className="data ">
                <div className="score" style={{ width: 40, height: 40 }}>
                <CircularProgressbar
                  value={movie.vote_average.toFixed(1) * 10}
                  text={`${movie.vote_average.toFixed(1) *10}%`}
                  background
                  backgroundPadding={6}
                  styles={buildStyles({
                    textSize: '32px',
                    pathColor: `rgba(23, 183, 218, ${movie.vote_average.toFixed(1) / 10})`,
                    textColor: 'white',
                    trailColor: "transparent",
                    backgroundColor: "#032541",
                  })}
                />
              </div>
                  <p>{movie?.original_title}</p>
                  <span className="time">{movie?.release_date}</span>
                 
                </div>
                </Link>
               
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
}
