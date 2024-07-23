import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Component/Layout/Layout"
import Home from "./Component/Home/Home"
import MoviePopular from "./Component/MovePopular/MoviePopular"
import MovieNowPlay from "./Component/MovieNowPlaying/MovieNowPlay"
import MovieUPComing from "./Component/MovieUpComing/MovieUPComing"
import MovieTopRated from "./Component/MovieTopRated/MovieTopRated"
import TrendDetails from "./Pages/Trending/TrendDetails"
import MoviePopularDetails from "./Component/MoviePopularDetails/MoviePopularDetails"
import MovieTopDetails from "./Component/MovieTopRatedDetails/MovieTopDetails"
// import ResponsiveAppBar from "./Component/ResponsiveAppBar"



function App() {
  const routs=createBrowserRouter([
    {path:"",element: <Layout></Layout>,children:[
      {index:true,element: <Home></Home>},
      {path:'moviepopular',element: <MoviePopular></MoviePopular>},
      {path:'/moviepopular/:id',element: <MoviePopularDetails></MoviePopularDetails>},
      {path:'movienowplay',element: <MovieNowPlay></MovieNowPlay>},
      {path:'movienowPlay/:id',element: <MovieNowPlay></MovieNowPlay>},
      {path:'movieUpComing',element: <MovieUPComing></MovieUPComing>},
      {path:'movieUpComing',element: <MovieUPComing></MovieUPComing>},
      {path:"movieTopRated" , element: <MovieTopRated></MovieTopRated>},
      {path:"movieTopRated/:id" , element: <MovieTopDetails></MovieTopDetails>},
      {path:"/trendDetails/:id" , element:<TrendDetails></TrendDetails>},
    ]}
  ])

  return (
    <RouterProvider router={routs}/>
    // <ResponsiveAppBar/>
    // <Videos movieId={'1226578'}/>
    // <TrendLoad/>
    
  )
}

export default App
