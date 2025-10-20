import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: '',
        Component: Home
      },
      {
        path: '/category/:id',
        loader: () => fetch('/news.json'),
        Component: CategoryNews,
      }
    ]
  },
  {
    path: "/auth",
    element: <div>Authintication Layout</div>,
  },
  {
    path: "/news",
    element: <div>News Layout</div>,
  },
  {
    path: "/*",
    element: <div>Error404</div>,
  },
]);

export default router