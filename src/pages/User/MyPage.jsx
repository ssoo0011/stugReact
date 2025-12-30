import Header from "../../components/layout/header/Header.jsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAlert } from "../../components/common/AlertSystem.jsx";

import PasswordField from "../../components/common/PasswordField";
import useMyPageUser from "../../hooks/user/useMyPageUser.js";
import useChangePassword from "../../hooks/user/useChangePassword.js";
import ReadOnlyField from "../../components/common/ReadOnlyField";

export default function MyPage() {
    const navigate = useNavigate();
    const { changePassword } = useChangePassword();
    const { openAlert } = useAlert();

    const [passwordForm, setPasswordForm] = useState({
        password: "",
        confirmPassword: "",
    });

    const { user, loading } = useMyPageUser(navigate);

    const onChange = (e) => {
        const { name, value } = e.target;
        setPasswordForm((prev) => ({ ...prev, [name]: value }));
    };

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
                                        <button type="button" className="btn btn-primary btn" onClick={handleSubmit}>
                                            수정
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
