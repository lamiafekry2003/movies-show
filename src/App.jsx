import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./Component/Layout/Layout"
import Home from "./Component/Home/Home"
import MoviePopular from "./Component/MovePopular/MoviePopular"
import MovieNowPlay from "./Component/MovieNowPlaying/MovieNowPlay"
import MovieUPComing from "./Component/MovieUpComing/MovieUPComing"
import MovieTopRated from "./Component/MovieTopRated/MovieTopRated"


function App() {
  const routs=createBrowserRouter([
    {path:"",element: <Layout></Layout>,children:[
      {index:true,element: <Home></Home>},
      {path:'moviepopular',element: <MoviePopular></MoviePopular>},
      {path:'movienowplay',element: <MovieNowPlay></MovieNowPlay>},
      {path:'movieUpComing',element: <MovieUPComing></MovieUPComing>},
      {path:"movieTopRated" , element: <MovieTopRated></MovieTopRated>},
    ]}
  ])

  return (
    <RouterProvider router={routs}/>
    
  )
}

export default App
