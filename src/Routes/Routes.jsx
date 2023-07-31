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
import PrivateRoute from "./PrivateRoute";
import CollgeDetails from "../pages/Home/Home/CollgeDetails";
import AdmissionForm from "../pages/AdmissionCollege/AdmissionForm";
import AddReview from "../pages/AddReview/AddReview";

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
                path:'admission-process/:id',
                element:<AdmissionForm></AdmissionForm>,
                loader:({params})=>fetch(`http://localhost:5000/college/${params.id}`)
                
            },
        
            {
                path:'my-college',
                element:<PrivateRoute><MyCollege></MyCollege></PrivateRoute>,
                
            },
            {
                path:'add-college',
                element:<PrivateRoute><AddCollege></AddCollege></PrivateRoute>
            },
            {
                path:'college/:id',
                element:<PrivateRoute><CollgeDetails></CollgeDetails></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/college/${params.id}`)
                
            },
            {
                path:'add-review/:id',
                element:<PrivateRoute><AddReview></AddReview></PrivateRoute>,
                loader:({params})=>fetch(`http://localhost:5000/college/${params.id}`)
                
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