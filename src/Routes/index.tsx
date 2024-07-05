import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./Dashboard";
import NotFoundPage from "../Components/notFound";
import BerandaPage from "../Pages/BerandaPage/inde";
import ErrorPage from "../Components/pageError";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import ForgotPassword from "../Components/ForgotPassword";
import StatisticPage from "../Pages/StaticPage";
import BeritaPage from "../Pages/BeritaPage/inde";

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
      {
        path: "/register",
        element: <RegisterPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/statistik",
        element: <StatisticPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/berita",
        element: <BeritaPage />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
