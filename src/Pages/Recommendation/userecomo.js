import axios from "axios";
import { useQuery } from "react-query";

export function getRecommendation(movie_id){
    return axios.get(`https://api.themoviedb.org/3/movie/${movie_id}/recommendations?language=en-US&page=1`,
        {
            headers:{
               "Content-type": "application/json; charset=UTF-8",
               "Authorization":
             "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTA2YTMzYzZmZDhiM2RiNzQyNDNiMzY2NTBiZDdmYiIsInN1YiI6IjY2MzUxNTdhNjYxMWI0MDEyZDY3MmUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QKk3DMrdR8bYiOqvXlUboePbvVtj0jM2VeYdvJsLcV4",
           }
          }
    )
}

export function useGetrecomm(movie_id){
    return useQuery(['movieRecomm',movie_id],()=>getRecommendation(movie_id))
}