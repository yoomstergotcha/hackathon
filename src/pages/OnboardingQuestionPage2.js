import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/OnboardingQuestionPage.css';
import onboarding2 from '../assets/images/onboarding2.svg';

function OnboardingQuestionPage2({
  questionNumber = 2,
  totalQuestions = 7,
  question = '정보를 찾을 때 어떤걸 먼저 고려하나요?',
}) {
  const navigate = useNavigate();
  const handleAnswer = (answer) => {
    console.log(`사용자 응답: ${answer}`);
    // TODO: 여기서 /api/onboarding/answer POST 요청
    // body: { questionId, answer }
    navigate('/onboardingquestion3');
  };

  const progressWidth = `${(questionNumber / totalQuestions) * 311}px`;

  return (
    <div className="onboarding-question-container">
      <StatusBar backgroundColor="transparent" />

      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="뒤로가기" className="back-icon" />
        </button>
      </div>

      {/* 상단바 */}
      <div className="top-bar">
        <span className="page-indicator">
          {questionNumber}/{totalQuestions}
        </span>
      </div>

      {/* 진행률 바 */}
      <div className="progress-bar-bg">
        <div className="progress-bar-fill" style={{ width: progressWidth }} />
      </div>

      {/* 온보딩 이미지 */}
      <div className="onboarding-image-wrapper">
        <img
          src={onboarding2}
          alt="온보딩 이미지"
          className="onboarding-image-2"
        />
      </div>

      {/* 질문 */}
      <div className="title-box">
        <h2 className="question-title-2">{question}</h2>
      </div>

      {/* 응답 박스 */}
      <div className="answer-list">
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 1')}>
          익숙한 언론사가 신뢰할 수 있지.
        </div>
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 2')}>
          다양한 언론사에서
          <br />
          새로운 인사이트를 접하고 싶어.
        </div>
      </div>
    </div>
  );
}

export default OnboardingQuestionPage2;
