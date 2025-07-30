import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/OnboardingStartPage.css';
import StatusBar from '../components/StatusBar';
import onboarding from '../assets/images/onboarding.jpg';

function OnboardingStartPage({}) {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/onboardingquestion1');
  };

  return (
    <div className="onboarding-container">
      <StatusBar />

      <div className="onboarding-texts">
        <h1 className="title">나의 정보 수용 스타일은?</h1>
        <p className="subtitle">7개의 문항으로 평가해보는 나의 성향</p>
        <p className="description">
          생각의 균형을 잃고 있진 않을까? <br />
          나의 확증편향 진단하기
        </p>
      </div>

      <div className="onboarding-result">
        <img
          src={onboarding}
          alt="온보딩 결과 미리보기"
          className="random-image"
        />
      </div>

      <div className="bottom-bar">
        <button className="start-button" onClick={handleSignup}>
          시작하기
        </button>
      </div>
    </div>
  );
}
export default OnboardingStartPage;
