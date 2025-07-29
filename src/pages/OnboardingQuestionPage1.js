import React from 'react';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/OnboardingQuestionPage.css';

function OnboardingQuestionPage1({
  questionNumber = 1,
  totalQuestions = 7,
  question = "'최근 뉴스에서 ‘전기차 화재가 증가하고 있다'라는 보도를 봤습니다. 이때 당신의 반응은?'",
}) {
  const navigate = useNavigate();
  const handleAnswer = (answer) => {
    console.log(`사용자 응답: ${answer}`);

    // TODO: 여기서 /api/onboarding/answer POST 요청
    // body: { questionId, answer }

    // ✅ 응답 후 다음 페이지로 이동
    navigate('/onboardingquestion2');
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
          역시 전기차는 안전하지 않아.
        </div>
        <div className="answer-box" onClick={() => handleAnswer('예시 응답 2')}>
          전기차 판매량이 늘어나서 그런 것 아닐까?
        </div>
      </div>
    </div>
  );
}

export default OnboardingQuestionPage1;
