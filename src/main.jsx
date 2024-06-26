import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  useRoutes,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Main from './layout/Main.jsx';
import About from './components/About/About.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import SignUp from './components/Signup/SignUp.jsx';
import LogIn from './components/LogIn/LogIn.jsx';
import DashBoard from './components/Dashboard/DashBoard.jsx';
import Success from './components/Success/Success.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
        
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/dashboard",
        element: <DashBoard></DashBoard>,
      },
      


    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
