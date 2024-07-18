/* eslint-disable @typescript-eslint/no-unused-vars */

import Home from "../features/home";
import Layout from "../component/layout/layout";
import MyFavoriteTv from "../features/myfavoritetv";
import MyProfile from "../features/myprofile";
import TopMovies from "../features/movies";
import TvShows from "../features/tv-shows";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRoutes from "./protected-route";
import Authentication from "../features/auth";

export const router = createBrowserRouter([
  {
    element : <ProtectedRoutes/>,
    children:[
        {
            path :"/",
            element : <Layout/>,
            children:[
                {
                    index: true,
                    element: <Home/>,
                },
                {
                    path :"/movies",
                    element : <TopMovies/>
                },
                {
                    path :"/tv-shows",
                    element : <TvShows/>
                },
                {
                    path :"/myfavoritetv",
                    element : <MyFavoriteTv/>
                },
                {
                    path :"/myprofile",
                    element : <MyProfile/>
                },
                {
                    path :"/login",
                    element : <Authentication/>
                },
            ]
        }
    ]
  }      
])