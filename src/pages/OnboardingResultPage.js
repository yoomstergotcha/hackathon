import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/OnboardingResultPage.css';
import onboarding5 from '../assets/images/onboarding5.svg';

function OnboardingResultPage() {
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate('/main');
  };

  return (
    <div className="onboarding-result-container">
      <StatusBar />

      {/* 상단바 */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="뒤로가기" className="back-icon" />
        </button>
      </div>

      {/* 성향 텍스트 */}
      <div className="result-texts">
        <h2 className="tendency-title">28% 확증편향! </h2>
        <p className="tendency-summary">
          자기 생각보다, 논리를 우선시하는 실용적 판단형
        </p>
      </div>

      {/* 중앙 이미지 */}
      <div className="result-image-wrapper">
        <img src={onboarding5} alt="결과 이미지" className="result-image" />
      </div>

      {/* 하단 회색 바 */}
      <div className="bottom-gray-bar">
        <div className="percentage-box">
          <span className="percentage-text">조금은 고집 센 리스너</span>
        </div>
        <p className="tendency-description">
          남의 말을 듣긴 하지만, 이미 마음 속에 반쯤은 결론이 내려진 상태!
          겉으로는 열린 태도를 보이지만, 실제로는 자신의 생각에 무게가 쏠린
          선택적 수용자! 귀를 조금 더 열고 세상의 이야기를 들어봐요!
        </p>

        <p className="tendency-description-2">
          열린 자세에서 한 걸음 더 나아가면, 더 넓은 시야가 열릴 거예요. 익숙한
          정보 외에도, 반대 입장의 글 하나만 읽어보는 도전, 오늘 해볼까요?
        </p>

        <button className="complete-button" onClick={handleSignup}>
          가입완료
        </button>
      </div>
    </div>
  );
}

export default OnboardingResultPage;
