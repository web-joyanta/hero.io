import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Apps from "../pages/Apps/Apps";
import AppsDetails from "../pages/AppsDetails/AppsDetails";
import InstalledApps from "../pages/InstalledApps/InstalledApps";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "apps",
        Component: Apps
      },
      {
        path: "apps/details/:id",
        loader: () => fetch("/data.json"),
        Component: AppsDetails
      },
      {
        path: "installed",
        loader: () => fetch("/data.json"),
        Component: InstalledApps
      },
      {
        path: "*",
        Component: ErrorPage
      }
    ],
  }
]);
