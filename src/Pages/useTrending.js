import axios from "axios";
import { useQuery } from "react-query";


export function getAlltrend() {
   return axios.get(`https://api.themoviedb.org/3/trending/all/day?language=en-US`,
    {
      headers:{
         "Content-type": "application/json; charset=UTF-8",
         "Authorization":
       "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTA2YTMzYzZmZDhiM2RiNzQyNDNiMzY2NTBiZDdmYiIsInN1YiI6IjY2MzUxNTdhNjYxMWI0MDEyZDY3MmUyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QKk3DMrdR8bYiOqvXlUboePbvVtj0jM2VeYdvJsLcV4",
     }
    }
   )
}

export function useGetTrenting(key,fn){
   return useQuery(key,fn,{
      select:(data)=>data?.data
      
   })
}