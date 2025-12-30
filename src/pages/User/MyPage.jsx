import Header from "../../components/layout/Header";
import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AlertBox from "../../components/common/AlertBox";
import PasswordField from "../../components/common/PasswordField";
import useMyPageUser from "../../hooks/user/useMyPageUser.js";
import useChangePassword from "../../hooks/user/useChangePassword.js";
import ReadOnlyField from "../../components/common/ReadOnlyField";

export default function MyPage() {

    const navigate = useNavigate();
    const { changePassword } = useChangePassword();

    const [passwordForm, setPasswordForm] = useState({
        password: "",
        confirmPassword: "",
    });

    const [alert, setAlert] = useState({ type: "", message: "" });
    const [alertVisible, setAlertVisible] = useState(false);

    const hideTimerRef = useRef(null);     // 몇 초 뒤 숨기기 시작
    const clearTimerRef = useRef(null);    // fade 끝난 뒤 완전 제거

    const openAlert = (type, message, ms = 3000) => {
        // 기존 타이머 정리
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        if (clearTimerRef.current) clearTimeout(clearTimerRef.current);

        // 메시지 세팅 + 즉시 보이기
        setAlert({ type, message });
        setAlertVisible(true);

        // ms 후에 fade-out 시작
        hideTimerRef.current = setTimeout(() => {
            setAlertVisible(false);

            // 부트스트랩 fade 시간(기본 150ms) 조금 여유 줘서 완전 제거
            clearTimerRef.current = setTimeout(() => {
                setAlert({ type: "", message: "" });
                hideTimerRef.current = null;
                clearTimerRef.current = null;
            }, 2500);
        }, ms);
    };

    const closeAlert = () => {
        if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        if (clearTimerRef.current) clearTimeout(clearTimerRef.current);

        // fade-out 시작
        setAlertVisible(false);

        // fade 끝나면 제거
        clearTimerRef.current = setTimeout(() => {
            setAlert({ type: "", message: "" });
            hideTimerRef.current = null;
            clearTimerRef.current = null;
        }, 2500);
    };

    const { user, loading } = useMyPageUser(navigate);

    const onChange = (e) => {
        const { name, value } = e.target;
        setPasswordForm((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        return () => {
            if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
            if (clearTimerRef.current) clearTimeout(clearTimerRef.current);
        };
    }, []);

    const handleSubmit = async () => {
        if (passwordForm.password !== passwordForm.confirmPassword) {
            openAlert("danger", "비밀번호와 비밀번호 확인이 일치하지 않습니다.");
            return;
        }

        try {
            const data = await changePassword({
                password: passwordForm.password,
                confirmPassword: passwordForm.confirmPassword,
            });

            switch (data.code) {
                case "SUCCESS":
                    openAlert("success", data.message);
                    setTimeout(() => navigate("/login"), 2000);
                    break;

                case "PASSWORD_CONFIRM_NOT_MATCHED":
                    openAlert("danger", data.message);
                    break;

                default:
                    openAlert("danger", data.message || "처리 중 오류가 발생했습니다.");
                    break;
            }
        } catch (e) {
            console.log(e);
            openAlert("danger", "서버 요청 중 오류가 발생했습니다.");
        }
    };

    return (
        <>
            {loading && <div className="text-center py-4">로딩중...</div>}

            <main className="container col-lg-4 content-space-t-3">
                <div className="row justify-content-lg-between align-items-lg-center">
                    <div className="position-relative">
                        <div className="card card-shadow card-login">
                            <div className="card-body">
                                <form id="form" className="js-validate needs-validation" noValidate>
                                    <div className="text-center">
                                        <div className="mb-5">
                                            <h3 className="card-title">My Page</h3>
                                        </div>
                                    </div>
                                    <ReadOnlyField label="이름" id="name" name="name" value={user.name} placeholder="홍길동" />
                                    <ReadOnlyField label="아이디" id="id" name="id" value={user.id} placeholder="아이디" />
                                    <ReadOnlyField label="이메일" id="email" name="email" value={user.email} type="email" />
                                    <PasswordField
                                        label="비밀번호"
                                        name="password"
                                        id="password"
                                        value={passwordForm.password}
                                        onChange={onChange}
                                    />
                                    <PasswordField
                                        label="비밀번호 확인"
                                        name="confirmPassword"
                                        id="confirmPassword"
                                        value={passwordForm.confirmPassword}
                                        onChange={onChange}
                                    />
                                    <div className="d-grid gap-4">
                                        <button type="button" className="btn btn-primary btn" onClick={handleSubmit}>수정</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <AlertBox
                type={alert.type}
                message={alert.message}
                visible={alertVisible}
                onClose={closeAlert}
            />
        </>
    );
}