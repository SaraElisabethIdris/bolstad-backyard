import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTE_PATHS } from "./constants";
import Register from "./Register";
import ParticipantsList from "./ParticipantsList";
import { HomePage } from "./HomePage.tsx";
import LoginPage from "./LoginPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: ROUTE_PATHS.LOGIN,
    element: <LoginPage />,
  },
  {
    path: ROUTE_PATHS.PARTICIPANTS_LIST,
    element: <ParticipantsList />,
  },
]);

export function Router() {
  return (
    <RouterProvider router={router} future={{ v7_startTransition: true }} />
  );
}
