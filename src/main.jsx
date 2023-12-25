import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Error404Page from "./pages/Error404Page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <Error404Page />,
  },
  {
    path: "/pricing",
    element: <PricingPage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
