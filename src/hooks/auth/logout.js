import api from "../../services/apiClient.js";
import { useAuth } from "../../context/auth/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

export default function useLogout() {
    const { setIsAuth } = useAuth();
    const navigate = useNavigate();

    const logout = async () => {
        const res = await api.post("/api/auth/logout");

        if (res.data.code === "SUCCESS") {
            setIsAuth(false);
            navigate("/home");
        }
    };

    return logout;
}
