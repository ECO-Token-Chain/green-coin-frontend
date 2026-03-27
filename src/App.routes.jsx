import { createBrowserRouter } from "react-router-dom";
import Login from "./features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";
import ProtectedRoute from "./global/utils/ProtectedRoute";
import MainLayout from "./layout/Mainlayout";
import DashboardAdmin from "./features/Admin/Pages/DashboardAdmin";
import UserManagement from "./features/Admin/Pages/UserManagement";
import LeaderBoard from "./features/Admin/Pages/LeaderBoard";
import BinPages from "./features/Admin/Pages/BinPages";
import Marketplace from "./features/Admin/Pages/Marketplace";
import UserDetails from "./features/Admin/Pages/UserDetails";
import AdminRoute from "./global/utils/AdminRoutes";
import DashboardUser from "./features/User/Pages/Dashboard";
import ProfileUser from "./features/User/pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute>
            <MainLayout />
        </ProtectedRoute>,
        children:[
            {
                index: true,
                element: <AdminRoute><DashboardAdmin /></AdminRoute>
            },
            {
                path: "/user-management",
                element: <AdminRoute><UserManagement /></AdminRoute>
            },
            {
                path: "/user-management/:id",
                element: <AdminRoute><UserDetails /></AdminRoute>
            },
            {
                path: "/bin",
                element: <AdminRoute><BinPages /></AdminRoute>
            },
            {
                path: "/leaderboard",
                element: <LeaderBoard />
            },
            {
                path: "/marketplace",
                element: <AdminRoute><Marketplace /></AdminRoute>
            },
            {
                path: "/settings",
                element: <div>Settings</div>
            },
            {
                path: "/users",
                element: <DashboardUser />
            },
            {
                path: "/users/marketplace",
                element: <div>User Marketplace</div>
            },
            {
                path: "/users/profile",
                element: <ProfileUser />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    },
])