import Slider from "react-slick";
import { getAlltrend, useGetTrenting } from "../../Pages/useTrending"
import "./home.scss";
import Trending from "../../Pages/Trending/Trending";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
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
  console.log(data);
  return (
    <div className="container pt-5">
      <div className="row">
        {isLoading ? (
          <HeaderLoad />
        ) : (
          <Slider {...settings}>
            {isLoading ? (
              <HeaderLoad />
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
                      <h2>{`Welcome.`||<Skeleton/>}</h2>
                      <h4>
                        {`Millions of movies, TV shows and people to discover.
                        Explore now.`||<Skeleton/>}
                      </h4>
                    </div>
                    <div className="search">
                      <form action="">
                        <input
                          type="text"
                          name=""
                          id=""
                          placeholder="search For Movie , Tv ,.."
                          className="form-control w-100"
                        />
                        <input type="submit" name="" id="" />
                      </form>
                    </div>
                  </div>
                </>
              ))
            )}
          </Slider>
        )}
      </div>
      <Trending />
    </div>
  );
}
function HeaderLoad() {
  return (
    <div className="col-md-12">
      <SkeletonTheme  highlightColor="#878686">
       <Skeleton className="w-100 fil" height={350} />
      </SkeletonTheme>
    </div>
  );
}
