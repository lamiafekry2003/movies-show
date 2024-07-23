import axios from "axios";
import { useQuery } from "react-query";

export function getVideo(movieId){
    const API_KEY="4506a33c6fd8b3db74243b36650bd7fb"
    return axios.get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`)
}

export function useGetVideo(movieId){
    // return useQuery([key,movieId],()=>fn(movieId))
    return useQuery(['movieVideo', movieId], () => getVideo(movieId));
}