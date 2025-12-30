import { useState } from "react";

export default function PasswordField({
                                          label,
                                          name,
                                          id,
                                          value,
                                          onChange,
                                          placeholder = "8자리 이상 비밀번호",
                                          required = true,
                                          minLength = 1,
                                      }) {
    const [show, setShow] = useState(false);

    return (
        <div className="mb-4">
            <label className="form-label" htmlFor={id}>{label}</label>
            <div className="input-group">
                <input
                    type={show ? "text" : "password"}
                    className="form-control"
                    name={name}
                    id={id}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    aria-label={placeholder}
                    required={required}
                    minLength={minLength}
                />
                <button
                    type="button"
                    className="input-group-append btn btn-light"
                    onClick={() => setShow((prev) => !prev)}
                >
                    <i className={show ? "bi bi-eye-slash" : "bi bi-eye"} />
                </button>
                <span className="invalid-feedback">비밀번호를 확인해주세요.</span>
            </div>
        </div>
    );
}
