import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/OnboardingStartPage.css';
import StatusBar from '../components/StatusBar';

import onboarding2 from '../assets/images/onboarding2.svg';
import onboarding3 from '../assets/images/onboarding3.svg';
import onboarding6 from '../assets/images/onboarding6.svg';

function OnboardingStartPage({}) {
  const navigate = useNavigate();
  const images = [onboarding2, onboarding3, onboarding6];

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

      {/* 세 개 이미지 모두 렌더링 */}
      {images.map((src, idx) => {
        // 랜덤 offset: -50~50px
        const offsetX = Math.random() * 100 - 50;
        const offsetY = Math.random() * 100 - 50;
        const rotate = Math.random() * 30 - 15; // -15~15도
        return (
          <img
            key={idx}
            src={src}
            alt={`검사 미리보기 ${idx}`}
            className="result-image"
            style={{
              transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px)) rotate(${rotate}deg)`,
              zIndex: idx + 1,
            }}
          />
        );
      })}

      <div className="bottom-bar">
        <button className="start-button" onClick={handleSignup}>
          시작하기
        </button>
      </div>
    </div>
  );
}
export default OnboardingStartPage;
