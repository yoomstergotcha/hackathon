import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/OnboardingQuestionPage.css';
import onboarding5 from '../assets/images/onboarding5.svg';

function OnboardingQuestionPage5({
  questionNumber = 5,
  totalQuestions = 7,
  question = '주식 추천 글을 볼 때 더 자주하는 선택은?',
}) {
  const navigate = useNavigate();
  const handleAnswer = (answer) => {
    console.log(`사용자 응답: ${answer}`);
    // TODO: 여기서 /api/onboarding/answer POST 요청
    // body: { questionId, answer }
    navigate('/onboardingquestion6');
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
          src={onboarding5}
          alt="온보딩 이미지"
          className="onboarding-image-5"
        />
      </div>
      {/* 질문 */}
      <h2 className="question-title-5">{question}</h2>

      {/* 응답 박스 */}
      <div className="answer-list">
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 1')}>
          항상보던 반도체로 봐야겠다.
        </div>
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 2')}>
          종목 상관 없이 다 보는게 더 재밌어.
        </div>
      </div>
    </div>
  );
}

export default OnboardingQuestionPage5;
