//로그인 입력화면
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import '../assets/styles/LoginPage.css';
import backIcon from '../assets/images/back.svg';

function LoginPage() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        'https://api.newsto.r-e.kr/users/login',
        {
          handle: id,
          password: pw,
        }
      );

      console.log('로그인 성공:', response.data);
      alert(`환영합니다`);
      navigate('/main'); // 로그인 성공 후 메인 페이지로 이동
    } catch (error) {
      if (error.response) {
        alert(`로그인 실패: ${error.response.data.message}`);
      } else {
        alert('서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.');
      }
    }
  };

  return (
    <div className="login-page">
      <StatusBar />

      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="뒤로가기" className="back-icon" />
        </button>
      </div>

      <div className="login-wrapper">
        <div className="brand-box">News To.</div>

        <input
          type="text"
          placeholder="아이디"
          className="login-input"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호"
          className="login-input"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />

        <button className="login-button" onClick={handleLogin}>
          로그인
        </button>

        <div className="login-links">
          <span className="link">아이디 찾기</span> |{' '}
          <span className="link">비밀번호 찾기</span>
        </div>
      </div>
    </div>
  );
}
export default LoginPage;
