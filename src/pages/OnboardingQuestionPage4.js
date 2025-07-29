import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/OnboardingQuestionPage.css';
import onboarding4 from '../assets/images/onboarding4.svg';

function OnboardingQuestionPage4({
  questionNumber = 4,
  totalQuestions = 7,
  question = '연예인 A가 말한 브랜드가 좋아보인다. 이때,  당신의 반응은?',
}) {
  const navigate = useNavigate();
  const handleAnswer = (answer) => {
    console.log(`사용자 응답: ${answer}`);
    // TODO: 여기서 /api/onboarding/answer POST 요청
    // body: { questionId, answer }
    navigate('/onboardingquestion5');
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

      {/* 온보딩 이미지 */}
      <div className="onboarding-image-wrapper">
        <img
          src={onboarding4}
          alt="온보딩 이미지"
          className="onboarding-image-4"
        />
      </div>

      {/* 질문 */}
      <h2 className="question-title-4">{question}</h2>

      {/* 응답 박스 */}
      <div className="answer-list">
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 1')}>
          오 좋아보인다. 나도 사봐야지.
        </div>
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 2')}>
          광고일 수 있으니 다른 후기도 찾아봐야지
        </div>
      </div>
    </div>
  );
}

export default OnboardingQuestionPage4;
