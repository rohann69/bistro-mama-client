import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import MenuItems from "../Pages/MenuItems/MenuItems";
import Order from "../Pages/Oder/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Share/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashBoard from "../LayOut/DashBoard";
import MyCart from "../Pages/DashBoard/MyCart/MyCart";


export const router = createBrowserRouter([
    {
      path: '',
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path: 'menu',
          element: <MenuItems></MenuItems>
        },
        {
          path: 'order/:category',
          element: <Order></Order>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <DashBoard></DashBoard>,
      children: [
        {
          path: 'mycart',
          element: <MyCart></MyCart>
        }
      ]
    }
  ]);