import { lazy } from "react";

// project import
import Loadable from "components/Loadable";
import MainLayout from "layout/MainLayout";

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import("pages/dashboard")));

// render - sample page
const SamplePage = Loadable(lazy(() => import("pages/extra-pages/SamplePage")));
const Citizens = Loadable(lazy(() => import("pages/extra-pages/Citizens")));
const Settlements = Loadable(
  lazy(() => import("pages/extra-pages/Settlements"))
);
const Volunteers = Loadable(
  lazy(() => import("pages/extra-pages/Volunteers"))
);

// render - utilities
const Typography = Loadable(
  lazy(() => import("pages/components-overview/Typography"))
);
const Color = Loadable(lazy(() => import("pages/components-overview/Color")));
const Shadow = Loadable(lazy(() => import("pages/components-overview/Shadow")));
const AntIcons = Loadable(
  lazy(() => import("pages/components-overview/AntIcons"))
);

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <DashboardDefault />,
    },
    {
      path: "color",
      element: <Color />,
    },
    {
      path: "dashboard",
      children: [
        {
          path: "default",
          element: <DashboardDefault />,
        },
      ],
    },
    {
      path: "volunteers",
      element: <Volunteers />,
    },
    {
      path: "citizens",
      element: <Citizens />,
    },
    {
      path: "settlements",
      element: <Settlements />,
    },
    {
      path: "shadow",
      element: <Shadow />,
    },
    {
      path: "typography",
      element: <Typography />,
    },
    {
      path: "icons/ant",
      element: <AntIcons />,
    },
  ],
};

export default MainRoutes;
