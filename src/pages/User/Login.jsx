export default function Login() {
    return (
        <div className="container mt-4" style={{maxWidth: 420}}>
            <h2>Login</h2>
            <input className="form-control mb-2" placeholder="아이디" />
            <input className="form-control mb-3" type="password" placeholder="비밀번호" />
            <button className="btn btn-primary w-100">로그인</button>
        </div>
    );
}