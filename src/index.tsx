import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./root.tsx";
import Home from "./pages/home.tsx";
import ErrorPage from "./pages/error.tsx";
import News from "./pages/news.tsx";
import Events from "./pages/events.tsx";
import Research from "./pages/research.tsx";
import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/research",
        element: <Research />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
