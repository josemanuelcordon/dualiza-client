import { RouterProvider } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { router } from "./pages/router/router";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
