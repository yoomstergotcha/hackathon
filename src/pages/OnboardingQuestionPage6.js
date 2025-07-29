import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/OnboardingQuestionPage.css';
import onboarding6 from '../assets/images/onboarding6.svg';

function OnboardingQuestionPage6({
  questionNumber = 6,
  totalQuestions = 7,
  question = '친구와 의견이 맞지 않을 때 드는 생각은?',
}) {
  const navigate = useNavigate();
  const handleAnswer = (answer) => {
    console.log(`사용자 응답: ${answer}`);
    // TODO: 여기서 /api/onboarding/answer POST 요청
    // body: { questionId, answer }
    navigate('/onboardingquestion7');
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
          src={onboarding6}
          alt="온보딩 이미지"
          className="onboarding-image-6"
        />
      </div>
      {/* 질문 */}
      <h2 className="question-title-6">{question}</h2>

      {/* 응답 박스 */}
      <div className="answer-list">
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 1')}>
          쟤는 원래 나랑 잘 안맞았어. 답답하다
        </div>
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 2')}>
          음 그렇게도 생각할 수 있갰구나.
        </div>
      </div>
    </div>
  );
}

export default OnboardingQuestionPage6;
