import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/OnboardingQuestionPage.css';

function OnboardingQuestionPage3({
  questionNumber = 3,
  totalQuestions = 7,
  question = '질문',
}) {
  const navigate = useNavigate();
  const handleAnswer = (answer) => {
    console.log(`사용자 응답: ${answer}`);
    // TODO: 여기서 /api/onboarding/answer POST 요청
    // body: { questionId, answer }
    navigate('/onboardingquestion4');
  };

  const progressWidth = `${(questionNumber / totalQuestions) * 311}px`;

  return (
    <div className="onboarding-question-container">
      <StatusBar />

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

      {/* 질문 */}
      <h2 className="question-title">{question}</h2>

      {/* 응답 박스 */}
      <div className="answer-list">
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 1')}>
          예시 응답 1
        </div>
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 2')}>
          예시 응답 2
        </div>
      </div>
    </div>
  );
}

export default OnboardingQuestionPage3;
