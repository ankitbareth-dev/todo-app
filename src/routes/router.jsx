import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import LoginPage from "../components/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);
