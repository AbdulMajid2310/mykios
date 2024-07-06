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
import ProfilPage from "../Pages/ProfilPage";
import KiosPage from "../Pages/KiosPage";
import DetailKios from "../Components/DetailKios";
import Denah from "../Components/Denah";
import Tentang from "../Pages/Tentang";
import DetailBerita from "../Components/DetailBerita";
import DetailPaymen from "../Components/DetailPayment";

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
      {
        path: "/detail-berita",
        element: <DetailBerita />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/profile",
        element: <ProfilPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/my-kios",
        element: <KiosPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/detail-kios",
        element: <DetailKios />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/denah",
        element: <Denah />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/tentang",
        element: <Tentang />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/detail-payment",
        element: <DetailPaymen />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);
