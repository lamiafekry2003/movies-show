import axios from "axios";
import { useQuery } from "react-query";
// get popular movie
export function getMoviePopular(quaryData){
   return axios.get(`https://api.themoviedb.org/3/movie/popular?limit=10&language=en-US&page=${quaryData.queryKey[1]}`,{
    headers:{
        "Content-type": "application/json; charset=UTF-8",
        "Authorization":
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTA2YTMzYzZmZDhiM2RiNzQyNDNiMzY2NTBiZDdmYiIsInN1YiI6IjY2MzUxNTdhNjYxMWI0MDEyZDY3MmUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QKk3DMrdR8bYiOqvXlUboePbvVtj0jM2VeYdvJsLcV4",
    }
   })
}
// get movie now playing
export function getMovieNowPlayer(){
   return axios.get(`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'`,{
    headers:{
        "Content-type": "application/json; charset=UTF-8",
        "Authorization":
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTA2YTMzYzZmZDhiM2RiNzQyNDNiMzY2NTBiZDdmYiIsInN1YiI6IjY2MzUxNTdhNjYxMWI0MDEyZDY3MmUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QKk3DMrdR8bYiOqvXlUboePbvVtj0jM2VeYdvJsLcV4",
    }
   })
}
// get movie top rateing
export function getMovieTopRated(quaryData){
   return axios.get(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${quaryData.queryKey[1]}`,{
    headers:{
        "Content-type": "application/json; charset=UTF-8",
        "Authorization":
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTA2YTMzYzZmZDhiM2RiNzQyNDNiMzY2NTBiZDdmYiIsInN1YiI6IjY2MzUxNTdhNjYxMWI0MDEyZDY3MmUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QKk3DMrdR8bYiOqvXlUboePbvVtj0jM2VeYdvJsLcV4",
    }
   })
}

export function useGetMovies(key,fn){
    return useQuery(key,fn,{
       select:(data)=>data?.data
       
    })
  
 }