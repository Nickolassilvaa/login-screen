import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { ForgotPass } from "../pages/ForgotPass";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Home /> },
  { path: "/forgotPass", element: <ForgotPass /> },
]);

export function Routes() {
  return <RouterProvider router={router} />;
}
