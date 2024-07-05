import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFoundPage from "../Components/notFound";
import BerandaPage from "../Pages/BerandaPage/inde";
import ErrorPage from "../Components/pageError";
import LoginPage from "../Pages/LoginPage";

export const routes = createBrowserRouter([
  // Route Konsumen
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <NotFoundPage />,
    children: [
      { index: true, element: <BerandaPage />, errorElement: <ErrorPage /> },
      {
        path: "/login",
        element: <LoginPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
