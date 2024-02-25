import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home";
import LoginPage from "../LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/loginpage",
    element: <LoginPage />,
  },
]);
