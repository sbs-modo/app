import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AllTime from "./components/AllTime";
import ContactInfo from "./components/ContactInfo";
import Games from "./components/Games";
import PageHeader from "./components/PageHeader";
import Players from "./components/Players";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Games />,
  },
  {
    path: "/pelit",
    element: <Games />,
  },
  {
    path: "/joukkue",
    element: <Players />,
  },
  {
    path: "/alltime",
    element: <AllTime />,
  },
  {
    path: "/yhteystiedot",
    element: <ContactInfo />
  }
]);

export default function App() {
  return (
    <>
      <PageHeader />
      <RouterProvider router={router} />
    </>
  )
}