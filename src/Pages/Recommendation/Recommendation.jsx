import Slider from "react-slick";
import { useGetrecomm } from "./userecomo"
// import { Link } from "react-router-dom";

export default function Recommendation(movie_id) {
  const {data}=useGetrecomm(movie_id)
  console.log(data)
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
  return (
    <div>
      <Slider {...settings}>
            
        </Slider>
    </div>
  )
}
