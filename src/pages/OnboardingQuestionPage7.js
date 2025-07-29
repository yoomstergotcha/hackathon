import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/OnboardingQuestionPage.css';

function OnboardingQuestionPage7({
  questionNumber = 7,
  totalQuestions = 7,
  question = '질문',
  userId,
}) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(null);

  const handleFinishOnboarding = async () => {
    setLoading(true);

    try {
      // ✅ PATCH 요청
      //const response = await axios.patch(
      //  `http://localhost:8080/api/users/${userId}/status`,
      // {
      //   status: 'A', // 🔹 자가진단 완료 시 status를 A로 변경
      // }
      //);

      console.log('자가진단 결과 저장 성공:');

      alert('자가진단 완료! 메인페이지로 이동합니다.');
      navigate('/main'); // 🔹 메인 페이지로 이동
    } catch (error) {
      console.error('자가진단 저장 실패:', error);
      alert('서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = (selected) => {
    setAnswer(selected);
    handleFinishOnboarding();
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

export default OnboardingQuestionPage7;
