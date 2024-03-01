import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../Home";
import LoginPage from "../LoginPage";
import Contact from "../Contact";
import News from "../News";
import ResultObtained from "../ResultObtained";
import CreateNew from "../CreateNew";
import New from "../New";
import CreateUser from "../CreateUser";
import UserList from "../UserList";

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
      { path: "/noticia", element: <New /> },
      { path: "/resultadosobtenidos", element: <ResultObtained /> },
      { path: "/create/new", element: <CreateNew /> },
      { path: "/create/user", element: <CreateUser /> },
      { path: "/list/users", element: <UserList /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
