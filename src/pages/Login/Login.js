import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="wrap_box">
      <div className="westagram">Westagram</div>
      <form className="login_form">
        <form action="#none">
          <input
            id="login_id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input id="login_pw" type="password" placeholder="비밀번호" />
          <div>
            <button className="login_btn" type="submit" id="login_login">
              로그인
            </button>
          </div>
        </form>
        <div className="forgot_pw">
          <a href="#" className="page_move">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </form>
    </div>
  );
};

export default Login;
