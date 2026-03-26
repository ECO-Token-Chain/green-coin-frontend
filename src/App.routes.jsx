import { createBrowserRouter } from "react-router-dom";
import Login from "./features/Auth/pages/Login";
import Register from "./features/Auth/pages/Register";
import ProtectedRoute from "./global/utils/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute><p>Home</p></ProtectedRoute>
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