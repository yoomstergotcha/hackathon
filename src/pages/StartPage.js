// 첫화면

import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import '../assets/styles/StartPage.css';
import logo from '../assets/images/logo.svg';

function StartPage() {
  const navigate = useNavigate();

  return (
    <div className="start-page">
      <StatusBar />

      <div className="start-content">
        <img src={logo} alt="logo" className="logo" />
        <div className="brand-name">News To.</div>
        <div className="brand-slogan">소중한 사람에게 뉴스를 선물하세요</div>

        <button className="log-in-button" onClick={() => navigate('/login')}>
          로그인하기
        </button>
        <button className="sign-up-button" onClick={() => navigate('/signup')}>
          회원가입하기
        </button>
      </div>
    </div>
  );
}

export default StartPage;
