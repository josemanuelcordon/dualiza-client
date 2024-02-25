import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home";
import LoginPage from "../LoginPage";
<<<<<<< HEAD
import Contact from "../Contact";
=======
import News from "../News";
>>>>>>> d80615ddaa5110756c063cd5179f6a12e92ba725

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
<<<<<<< HEAD
        path: "/contact",
        element: <Contact />,
=======
        path: "/noticias",
        element: <News />,
>>>>>>> d80615ddaa5110756c063cd5179f6a12e92ba725
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
