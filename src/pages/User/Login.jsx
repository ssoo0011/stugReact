import {useState} from "react";
import useLogin from "../../hooks/auth/login.js"


export default function Login() {

    const [loginInfo, setLoginInfo] = useState({
        id: '',
        password: ''
    })
    const onChange = (e) => {
        const {name, value} = e.target;
        setLoginInfo((prev) => ({...prev, [name]: value}));
    };

    return (
        <>
            <main className="container content-space-t-4">
                <div className="offset-3 col-lg-6 mt-10">
                    <div className="card card-shadow card-login">
                        <form id="form">
                            <div className="card-body">
                                <h2>LogIn</h2>
                                <input className="form-control mb-2 mt-3" placeholder="아이디"
                                       name="id" value={loginInfo.id} onChange={onChange}
                                />
                                <input className="form-control mb-3" type="password" placeholder="비밀번호"
                                       name="password" value={loginInfo.password} onChange={onChange}
                                />
                                <button type="button" className="btn btn-primary w-100" onClick={useLogin(loginInfo.id, loginInfo.password)}>로그인</button>
                                <div className="mt-3">
                                    <p className="card-text text-muted">
                                        비밀번호를 잊어버렸나요? <a className="link">비밀번호 찾기</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <div id="loginAlert" role="alert">
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