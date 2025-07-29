import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/OnboardingStartPage.css';
import StatusBar from '../components/StatusBar';
import onboardingresult from '../assets/images/onboarding.png';

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

      <div className="result-frame-wrapper">
        {/* 외곽 흰색 phone frame */}
        <svg
          className="phone-frame-outer"
          xmlns="http://www.w3.org/2000/svg"
          width="204"
          height="461"
          viewBox="0 0 204 461"
          fill="none"
        >
          <path
            d="M168.47 1L35.5224 1C16.1952 1 0.527344 18.1624 0.527344 39.3332L0.527344 421.667C0.527344 442.838 16.1952 460 35.5224 460H168.47C187.797 460 203.465 442.838 203.465 421.667V39.3332C203.465 18.1624 187.797 1 168.47 1Z"
            fill="white"
            stroke="#E0E1E6"
            stroke-miterlimit="10"
          />
        </svg>

        {/* 내부 회색 프레임 */}
        <svg
          className="phone-frame-inner"
          xmlns="http://www.w3.org/2000/svg"
          width="198"
          height="454"
          viewBox="0 0 198 454"
          fill="none"
        >
          <path
            opacity="0.48"
            d="M164.968 0.518318L33.0264 0.518318C14.8036 0.518318 0.0292969 16.6973 0.0292969 36.6584L0.0292969 417.71C0.0292969 437.671 14.8036 453.854 33.0264 453.854H164.968C183.191 453.854 197.966 437.671 197.966 417.71V36.6584C197.966 16.6973 183.191 0.513672 164.968 0.513672V0.518318ZM196.269 417.979C196.269 436.648 182.453 451.782 165.41 451.782H32.5811C15.5374 451.782 1.72178 436.648 1.72178 417.979L1.72178 36.3936C1.72603 17.7288 15.5416 2.59528 32.5811 2.59528L165.414 2.59528C182.457 2.59528 196.273 17.7288 196.273 36.3982V417.974L196.269 417.979Z"
            fill="#EAEAEC"
          />
        </svg>

        {/* 이미지 */}
        <img
          src={onboardingresult}
          alt="검사 미리보기"
          className="result-image"
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
