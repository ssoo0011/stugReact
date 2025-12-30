import Header from "../../components/layout/header/Header.jsx";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {postApi, showAlert} from "../../utils/common.js";

export default function Login() {

    const navigate = useNavigate();
    const [showPw, setShowPw] = useState(false);
    const [showConfirmPw, setConfirmShowPw] = useState(false);
    const [form, setForm] = useState({
        email: "",
        id: "",
        name: "",
        password: "",
        confirmPassword: "",
    });
    const [alertMsg, setAlertMsg] = useState("");

    const onChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const duplicateApi = async () => {
        setAlertMsg('');
        if (form.id == null || form.id.length === 0) {
            showAlert('signUpAlert', '아이디를 입력해 주세요.', 'danger');
            return;
        }


        const id = {id: form.id}
        try {
            const res = await postApi("/api/user/duplicate/id", id);
            setAlertMsg(res.data.message);

            switch (res.data.code) {
                case 'SUCCESS':
                    showAlert('signUpAlert', res.data.message, 'success');
                    break;
                case 'DUPLICATE_ID':
                    showAlert('signUpAlert', res.data.message, 'danger');
                    break;
            }
        } catch (e) {
            console.log(e);
        }

    }

    const handleSubmit = async () => {

        HSBsValidation.init('.js-validate', {
            onSubmit: data => {
                data.event.preventDefault()
            }
        });

        if (form.password !== form.confirmPassword) {
            showAlert('signUpAlert', '비밀번호와 비밀번호 확인이 일치하지 않습니다.', 'danger');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            showAlert('signUpAlert', '이메일 형식이 옳지 않습니다.', 'danger');
            return;
        }

        const payload = {
            id: form.id,
            email: form.email,
            name: form.name,
            password: form.password,
            confirmPassword: form.confirmPassword
        };

        const res = await postApi("/api/user/signUp", payload)
        try {
            setAlertMsg(res.data.message);

            switch (res.data.code) {
                case 'SUCCESS':
                    showAlert('signUpAlert', res.data.message, 'success');
                    navigate("/login");
                    break;
                case 'DUPLICATE_ID':
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
                                            <h3 className="card-title">Sign Up</h3>
                                        </div>
                                    </div>

                                    <label className="form-label" htmlFor="name">이름</label>
                                    <div className="mb-4">
                                        <input type="text" className="form-control"
                                               name="name" id="name" placeholder="홍길동" value={form.name}
                                               onChange={onChange}
                                               aria-label="홍길동" required/>
                                        <span className="invalid-feedback">이름을 입력해 주세요.</span>
                                    </div>

                                    <label className="form-label" htmlFor="name">아이디</label>
                                    <div className="mb-4 input-group">
                                        <input type="text" className="form-control"
                                               name="id" id="id" placeholder="아이디" value={form.id}
                                               onChange={onChange}
                                               aria-label="아이디" required/>
                                        <button type="button" className="btn btn-primary input-group-append"
                                                style={{fontSize: "13px"}} onClick={duplicateApi}>중복확인
                                        </button>
                                        <span className="invalid-feedback">아이디를 입력해 주세요.</span>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="signupSrEmail">이메일</label>
                                        <input type="email" className="form-control"
                                               name="email" id="email" value={form.email} onChange={onChange}
                                               placeholder="email@example.com"
                                               pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
                                               aria-label="email@example.com" required/>
                                        <span className="invalid-feedback">이메일을 입력해 주세요.</span>
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label" htmlFor="password">비밀번호</label>
                                        <div className="input-group">
                                            {/* 비밀번호 입력 */}
                                            <input type={showPw ? "text" : "password"}
                                                   className="form-control"
                                                   name="password" id="password" value={form.password}
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
                                                   value={form.confirmPassword} onChange={onChange}
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
                                        <button type="submit" className="btn btn-primary btn" onClick={handleSubmit}>회원가입</button>
                                        <p className="card-text text-muted">
                                            비밀번호를 잊어버렸나요?
                                            <a className="link" onClick={() => navigate("/login")}>로그인</a>
                                        </p>
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
                        {alertMsg}
                    </div>
                </div>
            </div>
        </>
    );
}