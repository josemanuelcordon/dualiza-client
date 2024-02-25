import { RouterProvider } from "react-router-dom";
import { router } from "./pages/router/router";
import { AuthProvider } from "./context/useAuthContext";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
