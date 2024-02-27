import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home";
import LoginPage from "../LoginPage";
import Contact from "../Contact";
import News from "../News";
import ResultObtained from "../ResultObtained";

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
        path: "/contact",
        element: <Contact />,
      },
      { path: "/noticias", element: <News /> },
      { path: "/resultadosobtenidos", element: <ResultObtained /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
