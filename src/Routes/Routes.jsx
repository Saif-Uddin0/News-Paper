import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../pages/Home";
import CategoryNews from "../pages/CategoryNews";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../Layout/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoutes from "../Provider/PrivateRoutes";
import Loading from "../pages/Loading";

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
        hydrateFallbackElement: <Loading></Loading>,
        Component: CategoryNews,
      }
    ]
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children:[
      {
        path: '/auth/login',
        Component: LoginPage
      },
      {
        path: '/auth/register',
        Component: RegisterPage
      },
      
    ]
  },
  {
    path: "/news-details/:id",
    loader:() => fetch('/news.json'),
    hydrateFallbackElement: <Loading></Loading>,
    element: <PrivateRoutes>
      <NewsDetails></NewsDetails>
    </PrivateRoutes>,
  },
  {
    path: "/*",
    element: <div>Error404</div>,
  },
]);

export default router