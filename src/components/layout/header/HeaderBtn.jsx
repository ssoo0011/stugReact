import { useNavigate } from "react-router-dom";
import useLogout from "../../../hooks/auth/logout.js";

export default function HeaderBtn({ isAuth = false }) {
    const navigate = useNavigate();
    const logout = useLogout();

    return (
        <>
            <li className="nav-item ms-lg-auto">
                {isAuth ? (
                    <button type="button" className="btn btn-ghost-dark me-2 me-lg-0" onClick={logout}>
                        logout
                    </button>
                ) : (
                    <button type="button" className="btn btn-ghost-dark me-2 me-lg-0" onClick={() => navigate("/login")}>
                        Login
                    </button>
                )}
            </li>

            <li className="nav-item">
                {isAuth ? (
                    <button type="button" className="btn btn-primary d-lg-inline-block" onClick={() => navigate("/myPage")}>
                        my Page
                    </button>
                ) : (
                    <button type="button" className="btn btn-primary d-lg-inline-block" onClick={() => navigate("/user/signUp")}>
                        signUp
                    </button>
                )}
            </li>
        </>
    );
}
