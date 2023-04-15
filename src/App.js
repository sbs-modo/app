import React from "react";
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import AllTime from "./components/AllTime";
import ContactInfo from "./components/ContactInfo";
import Games from "./components/Games";
import PageHeader from "./components/PageHeader";
import Players from "./components/Players";
import Records from "./components/Records";

const router = createHashRouter([
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
    path: "/records",
    element: <Records />,
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