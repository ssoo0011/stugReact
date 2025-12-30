import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/apiClient.js"; // axios instance (withCredentials: true 설정된거)

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const result = await api.get("/api/auth/isLogin");
                console.log(result.data)
                // 서버 응답에 따라 true/false 판별
                setIsAuth(result.data.isAuth === true);
            } catch (e){
                setIsAuth(false);
            } finally {
                setLoading(false);
            }
        };
        checkAuth();
    }, []);

    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, loading }}>
            {children}
        </AuthContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useAuth() {
    return useContext(AuthContext);
}