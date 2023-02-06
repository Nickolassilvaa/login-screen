import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import MyContext from "./context/loggedContext";
import { ForgotPass } from "./pages/ForgotPass";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/forgotPass", element: <ForgotPass /> },
]);

export function App() {
  const [state, setState] = useState(false);

  return (
    <MyContext.Provider value={{ state, setState }}>
      <RouterProvider router={router} />
    </MyContext.Provider>
  );
}
