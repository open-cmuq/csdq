import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RootLayout from "./root.tsx";
import Home from "./pages/home.tsx";
import ErrorPage from "./pages/error.tsx";
import News from "./pages/news.tsx";
import Events from "./pages/events.tsx";
import { loader as researchLoader } from "./pages/research.tsx";
import Research from "./pages/research.tsx";
import "./styles/index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ProfessorProfilePage,
  loader as professorLoader,
} from "./pages/professorProfile.tsx";
import ProfessorError from "./pages/professor-error.tsx";

// TODO: perhaps turn the routes into JSX
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
        loader: researchLoader,
      },
      {
        path: "/news",
        element: <News />,
      },
      {
        path: "research/:professorId",
        element: <ProfessorProfilePage />,
        loader: professorLoader,
        errorElement: <ProfessorError />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
