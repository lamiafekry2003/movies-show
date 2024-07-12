import Slider from "react-slick";
import { getAlltrend, useGetTrenting } from "../../useTrending";
import Loading from "../Loading/Loading";
import "./home.scss";
import Trending from "../../Pages/Trending";
export default function Home() {
  const { data, isError, isLoading, error } = useGetTrenting(
    "alltrend",
    getAlltrend
  );
  if (isError) {
    <h2>{error}</h2>;
  }
  const settings = {
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  // if(isLoading){
  //   <h2>loading....</h2>
  // }
  console.log(data);
  return (
    <div className="container">
      <div className="row">
        <Slider {...settings}>
          {isLoading ? (
            <Loading />
          ) : (
            data?.results?.slice(0, 9).map((data) => (
              <>
                <div className="col-md-12 cont" key={data.id}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${data?.backdrop_path}`}
                    alt=""
                    className="w-100 fil"
                    height={350}
                  />
                  <div className="text">
                    <h2>Welcome.</h2>
                    <h4>
                      Millions of movies, TV shows and people to discover.
                      Explore now.
                    </h4>
                  </div>
                  <div className="search">
                  <form action="">
                    <input type="text"  name="" id=""  placeholder="search For Movie , Tv ,.." className="form-control w-100"/>
                    <input type="submit" name="" id=""/>
                   </form>
                  </div>
                </div>
              </>
            ))
          )}
        </Slider>
      </div>
      <Trending/>
    </div>
  );
}
