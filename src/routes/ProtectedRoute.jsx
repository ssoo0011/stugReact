import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext.jsx";

export default function ProtectedRoute() {
    const { isAuth, loading } = useAuth();
    const location = useLocation(); // 현재 경로 정보를 가져옴

    if (loading) return null;

    if (!isAuth) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
}