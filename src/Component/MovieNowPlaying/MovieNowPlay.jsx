import { getMovieNowPlayer, useGetMovies } from "../../Pages/useMovies";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "./nowPlayer.scss"
// import { Link } from "react-router-dom";

export default function MovieNowPlay() {
  const { data } = useGetMovies("movieNowPlayer", getMovieNowPlayer);
  console.log(data?.results);
  return (
    <div className="container mt-3">
      <div className="row">
        <h2 className="pt-5 mt-2">Now Playing</h2>
        {data?.results?.map((movie) => (
          <div
            className="col-md-3 gy-4 d-flex justify-content-center align-item-center"
            key={movie?.id}
          >
            {/* <Link to={`/moviepopular/${movie?.id}`} className="nav-link"> */}
              <Card sx={{ maxWidth: 260 }} key={movie?.id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="350"
                    image={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                    alt="green iguana"
                  />
                  <CardContent>
                    <div
                      className="scorepopular"
                      style={{ width: 40, height: 40 }}
                    >
                      <CircularProgressbar
                        value={movie.vote_average.toFixed(1) * 10}
                        text={`${movie.vote_average.toFixed(1) * 10}%`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                          textSize: "32px",
                          pathColor: `rgba(23, 183, 218, ${
                            movie.vote_average.toFixed(1) / 10
                          })`,
                          textColor: "white",
                          trailColor: "transparent",
                          backgroundColor: "#032541",
                        })}
                      />
                    </div>
                    <Typography
                      gutterBottom
                      variant="p"
                      component="div"
                      className="fw-bold"
                    >
                      {movie?.original_title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {movie?.release_date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
          {/* </Link> */}
          </div>
        ))}
      </div>
    </div>
  );
}
