import axios from "axios";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import "./populardetails.scss"
const fetchMoviePopularDetails = async (id) => {
    const apiKey = "4506a33c6fd8b3db74243b36650bd7fb"; // Replace with your IMDb API key
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    const response = await axios.get(url);
    return response.data;
  };
export default function MoviePopularDetails() {
    const { id } = useParams();
    const { data } = useQuery(["movieDetails", id], () => fetchMoviePopularDetails(id));
    console.log(data);
    return (
      <div className="detail mt-5 py-3">
        <h1 className="text-center">Overflow</h1>
        <div
             className="cover"
            style={{
             backgroundImage: `url(https://image.tmdb.org/t/p/w500${data?.backdrop_path})`,
             minHeight:"550px"
            }}
          >
          <div className="container">
            <div className="row">
              <div className="col-md-3 pt-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
                className="cov"
                height={450}
                alt=""
              />
              </div>
              <div className="col-md-9 pt-4 ">
                <div className="info">
                  <h2 className=" text-light fw-bold">{data?.original_title}<span className="fs-3 fw-normal" style={{color:'rgb(176, 173, 173)'}}>{`(${data?.release_date.slice(0,4)})`}</span></h2>
                  <span className="text-light fw-normal">{data?.release_date}{`(${data?.origin_country})`} Genres:{`${data?.genres.map(genre => genre?.name).join(', ')}`}</span>
                  <div className="score  mt-5" style={{ width: 60, height: 60 }}>
                  <CircularProgressbar className="posion"
                    value={data?.vote_average.toFixed(1) * 10}
                    text={`${data?.vote_average.toFixed(1) *10}%`}
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                      textSize: '32px',
                      pathColor: `rgba(23, 183, 218, ${data?.vote_average.toFixed(1) / 10})`,
                      textColor: 'white',
                      trailColor: "transparent",
                      backgroundColor: "#032541",
                    })}
                  />
                </div>
                <p style={{color:'rgb(176, 173, 173)'}} >{data?.tagline}</p>
                <h3 className="text-light">Overflow</h3>
                <p className="text-light">{data?.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
    );
}
