import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

const LoginJunyoung = () => {
  const navigate = useNavigate();

  const goToMain = () => {
    navigate('/main');
  };
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const saveUserId = event => {
    setId(event.target.value);
    // console.log('id', id);
  };
  const saveUserPw = event => {
    setPw(event.target.value);
    // console.log('pw', pw);
  };

  return (
    <div className="wrapBox">
      <div className="westagram">Westagram</div>
      <form className="loginForm">
        <form action="#none" className="loginWrap">
          <input
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <div>
            <button
              className="loginBtn"
              type="submit"
              id="login_login"
              onClick={goToMain}
            >
              로그인
            </button>
          </div>
        </form>
        <div className="forgotPw">
          <a href="#!" className="pageMove">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginJunyoung;
