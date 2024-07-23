import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
// import ResponsiveAppBar from "../ResponsiveAppBar";

export default function Layout() {
  return (
    <>
     <Navbar/>
     {/* <ResponsiveAppBar/> */}
    <div className="parent">
      <Outlet/>
    </div>
     <Footer/>
    </>
  )
}
