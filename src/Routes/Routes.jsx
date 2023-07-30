import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import College from "../pages/College/College";
import AdmissionCollege from "../pages/AdmissionCollege/AdmissionCollege";
import MyCollege from "../pages/MyCollege/MyCollege";
import Profile from "../pages/Profile/Profile";
import AddCollege from "../pages/AddCollege/AddCollege";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path:'college',
                element:<College></College>
            },
            {
                path:'admission-college',
                element:<AdmissionCollege></AdmissionCollege>
            },
            {
                path:'my-college',
                element:<MyCollege></MyCollege>
            },
            {
                path:'add-college',
                element:<AddCollege></AddCollege>
            },
            
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Registration></Registration>
            },
            {
                path:'profile',
                element:<Profile></Profile>
            }
            
            
            
        ],

    },
    
]);