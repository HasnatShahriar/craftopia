import { createBrowserRouter } from "react-router-dom";
import Root from './../layouts/Root';
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AllArtCraftItem from "../pages/AllArtCraftItems/AllArtCraftItem";
import AddCraftItem from "../pages/AddCraftItem/AddCraftItem";
import MyArtCraftList from "../pages/MyArtCraftList/MyArtCraftList";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/allArt",
        element: <AllArtCraftItem />
      },
      {
        path: "/addCraft",
        element: <PrivateRoute><AddCraftItem /></PrivateRoute>
      },
      {
        path: "/myArt",
        element: <PrivateRoute><MyArtCraftList /></PrivateRoute>
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }

    ]
  },
]);


export default router;