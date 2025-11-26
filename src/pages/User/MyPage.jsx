import Header from "../../components/layout/Header";
import {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import {postApi, showAlert, getApi} from "../../utils/common.js";
import api from "../../services/apiClient.js";

export default function MyPage() {

    const navigate = useNavigate();
    const [showPw, setShowPw] = useState(false);
    const [showConfirmPw, setConfirmShowPw] = useState(false);
    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
    });
    const [passwordForm, setPasswordForm] = useState({
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        getApi("/api/user/myPage")
            .then(res => setUser(res.data))
            .catch((e) => {
                console.log(e);
                navigate("/login")
            });

    }, []);

    const onChange = (e) => {
        const { name, value } = e.target;
        setPasswordForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {

        if (passwordForm.password !== passwordForm.confirmPassword) {
            showAlert('signUpAlert', '비밀번호와 비밀번호 확인이 일치하지 않습니다.', 'danger');
            return;
        }

        const data = {
            password: passwordForm.password,
            confirmPassword: passwordForm.confirmPassword
        };
        try {

            const res = await api.post("/api/user/changePw", data);

            switch (res.data.code) {
                case 'SUCCESS':
                    showAlert('signUpAlert', res.data.message, 'success');
                    setTimeout(() => {
                        navigate("/login");
                    }, 2000);
                    break;
                case 'PASSWORD_CONFIRM_NOT_MATCHED':
                    showAlert('signUpAlert', res.data.message, 'danger');
                    break;
            }

        } catch (e) {
            console.log(e)
        }
    };

    return (
        <>
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

                                    <label className="form-label" htmlFor="name">이름</label>
                                    <div className="mb-4">
                                        <input type="text" className="form-control"
                                               name="name" id="name" placeholder="홍길동" value={user.name}
                                               aria-label="홍길동" readOnly required/>
                                    </div>

                                    <label className="form-label" htmlFor="name">아이디</label>
                                    <div className="mb-4 input-group">
                                        <input type="text" className="form-control"
                                               name="id" id="id" placeholder="아이디" value={user.id}
                                               aria-label="아이디" readOnly required/>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="signupSrEmail">이메일</label>
                                        <input type="email" className="form-control"
                                               name="email" id="email" value={user.email}
                                               aria-label="email@example.com" readOnly required/>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="password">비밀번호</label>
                                        <div className="input-group">
                                            {/* 비밀번호 입력 */}
                                            <input type={showPw ? "text" : "password"}
                                                   className="form-control"
                                                   name="password" id="password" value={passwordForm.password}
                                                   onChange={onChange}
                                                   placeholder="8자리 이상 비밀번호" aria-label="8자리 이상 비밀번호" required
                                                   minLength={1}
                                            />
                                            <button type="button" className="input-group-append btn btn-light"
                                                    onClick={() => setShowPw((prev) => !prev)}
                                            >
                                                <i className={showPw ? "bi bi-eye-slash" : "bi bi-eye"}/>
                                            </button>
                                            <span className="invalid-feedback">비밀번호를 확인해주세요.</span>
                                        </div>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="confirmPassword">비밀번호 확인</label>
                                        <div className="input-group">
                                            {/* 비밀번호 입력 */}
                                            <input type={showConfirmPw ? "text" : "password"}
                                                   className="form-control"
                                                   name="confirmPassword" id="confirmPassword"
                                                   value={passwordForm.confirmPassword} onChange={onChange}
                                                   placeholder="8자리 이상 비밀번호" aria-label="8자리 이상 비밀번호" required
                                                   minLength={1}
                                            />
                                            <button type="button" className="input-group-append btn btn-light"
                                                    onClick={() => setConfirmShowPw((prev) => !prev)}  >
                                                <i className={showConfirmPw ? "bi bi-eye-slash" : "bi bi-eye"}/>
                                            </button>
                                            <span className="invalid-feedback">비밀번호를 확인해주세요.</span>
                                        </div>
                                    </div>

                                    <div className="d-grid gap-4">
                                        <button type="button" className="btn btn-primary btn" onClick={handleSubmit}>수정</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div id="signUpAlert" role="alert">
                <div className="d-flex">
                    <div className="flex-shrink-0">
                        <i className="alert-icon bi"></i>
                    </div>
                    <div className="flex-grow-1 ms-2 alert-text">
                    </div>
                </div>
            </div>
        </>
    );
}