import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import resultImage from '../assets/images/onboarding_result.png'; // 디자이너 이미지
import '../assets/styles/OnboardingResultPage.css';

function OnboardingResultPage() {
  const navigate = useNavigate();

  return (
    <div className="onboarding-result-container">
      <StatusBar />

      {/* 상단바 */}
      <div className="top-bar">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="뒤로가기" className="back-icon" />
        </button>
      </div>

      {/* 성향 텍스트 */}
      <div className="result-texts">
        <h2 className="tendency-title">나의 성향: 생각의 벽을 쌓은 고립자</h2>
        <p className="tendency-summary">“내가 옳아. 나와 다른 건 다 틀렸어.”</p>
      </div>

      {/* 중앙 이미지 */}
      <div className="result-image-wrapper">
        <img src={resultImage} alt="결과 이미지" className="result-image" />
      </div>

      {/* 하단 회색 바 */}
      <div className="bottom-gray-bar">
        <div className="percentage-box">
          <span className="percentage-text">85% 확증 편향</span>
        </div>
        <p className="tendency-description">
          모든 정보를 나의 생각을 강화하기 위한 용도로 사용하며,
          <br />
          반대 입장은 불편해서 아예 보지 않으려는 성향!
          <br />
          확신의 껍질 속에서 세상과 거리를 두고 자신의 신념만을 더욱 단단하게
          다져갑니다.
          <br />
          다른 사람의 생각을 수용하며 벽을 깨고 나가보세요!
        </p>
      </div>
    </div>
  );
}

export default OnboardingResultPage;
