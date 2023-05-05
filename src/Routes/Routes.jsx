import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import ChefPageLayout from "../PageLayout/ChefPageLayout";
import LoginLayout from "../PageLayout/LoginLayout";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ChefRecipes from "../Components/ChefRecipes";
import Blog from "../Components/Blog";
import PriavetRoute from "../Routes/PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Navigate to="/chefpage" />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: 'blog',
        element:<Blog/>
      }
    ]
  },
  
  {
    path: 'chefpage',
    element: <ChefPageLayout />,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: '/chefpage',
        element: <Home />
      },
      {
        path: ':id',
        element:<PriavetRoute><ChefRecipes /></PriavetRoute>,
        loader: ({ params }) => fetch(`https://chef-recipe-hunting-server-side-jakaria455173.vercel.app/chefRecipe/${params.id}`)
      }
    ]
  }
])

export default router;
