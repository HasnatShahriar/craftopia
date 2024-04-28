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
import CraftDetails from "../components/CraftDetails";
import Update from "../components/Update";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:5000/crafts')
      },
      {
        path: "/crafts/:id",
        element: <CraftDetails />,
        loader: ({params}) => fetch(`http://localhost:5000/crafts/${params.id}`)
      },
      {
        path: "/update/:id",
        element: <Update/>
      },
      {
        path: "/allArt",
        element: <AllArtCraftItem />,
        loader: () => fetch('http://localhost:5000/crafts')
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