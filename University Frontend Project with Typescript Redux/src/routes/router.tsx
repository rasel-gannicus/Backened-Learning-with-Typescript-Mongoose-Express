import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import AdminLayout from "../layout/AdminLayout";
import { Children } from "react";
import AdminDashboard from "../pages/admin/AdminDashboard";
import AdminAbout from "../pages/admin/AdminAbout";



export const router = createBrowserRouter([
    {
        path : '/',
        element : <App /> 
    },
    {
        path : '/admin',
        element : <App /> ,
        children : [
            {
                path : 'dashboard',
                element : <AdminDashboard />
            },
            {
                path : 'about',
                element : <AdminAbout /> 
            }
        ]
    }
])