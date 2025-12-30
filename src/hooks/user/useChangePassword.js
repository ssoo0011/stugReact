import api from "../../services/apiClient.js";

export default function useChangePassword() {
    const changePassword = async ({ password, confirmPassword }) => {
        const res = await api.post("/api/user/changePw", { password, confirmPassword });
        return res.data; // { code, message, ... } 형태라고 가정
    };

    return { changePassword };
}
