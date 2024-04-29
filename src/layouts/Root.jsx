import { Outlet } from "react-router-dom";
import Navbar from "../pages/shared/Navbar";
import Footer from "../pages/shared/Footer";


const Root = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default Root;