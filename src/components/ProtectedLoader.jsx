import { Navigate } from "react-router-dom";
import { useAuth } from "../context/auth/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
    const { isAuth, loading } = useAuth();

    if (loading) return <div>Loading...</div>;
    return isAuth ? children : <Navigate to="/login" />;
}