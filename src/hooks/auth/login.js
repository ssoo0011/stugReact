import api from "../../services/apiClient.js";
import { useAuth } from "../../context/auth/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import { useAlert } from "../../components/common/AlertSystem.jsx";

export default function useLogin(id, password) {
    const { setIsAuth } = useAuth();
    const navigate = useNavigate();
    const { openAlert } = useAlert();

    const login = async (id, password) => {
        try {
            const data = { id, password };

            const res = await api.post("/api/auth/login", data, {
                headers: { "Content-Type": "application/json" },
            });

            if (res.data.code === "SUCCESS") {
                setIsAuth(true);
                const params = new URLSearchParams(window.location.search);
                const redirectUrl = params.get('redirect') || '/'; // 없으면 메인으로

                window.location.href = redirectUrl;
            } else {
                openAlert("danger", res.data.message || "로그인 실패");
            }
        } catch (e) {
            console.log(e);
            openAlert("danger", "서버 요청 중 오류가 발생했습니다.");
        }
    };

    return login;
}
