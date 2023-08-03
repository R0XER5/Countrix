import React from "react";
import {  createBrowserRouter } from "react-router-dom";
import Home from "./view/home";
// import DetailPage from "./view/DetailPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
           <Home/>
        ),
    },
    //{
      //  path: "countries/:countryId",
      //  element: <DetailPage/>,
    //},
]);

export default router;