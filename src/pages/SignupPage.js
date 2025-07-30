//회원가입 화면
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/SignupPage.css';

function SignupPage() {
  const navigate = useNavigate();
  //const handleSignup = () => {
  //  navigate('/onboarding'); // ✅ 온보딩 페이지로 이동
  //};

  const [username, setUsername] = useState('');
  const [handle, setHandle] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  /* const handleSignup = async () => {
    // 비밀번호 확인
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      // 2. 회원가입 POST 요청
      const response = await axios.post(
        'https://api.newsto.r-e.kr/users/signup',
        {
          username: username,
          handle: handle,
          password: password,
        }
      );

      console.log('회원가입 성공:', response.data);

      if (response.data.status === 'A') {
        alert('회원가입 성공! 자가진단 페이지로 이동합니다.');
        navigate('/onboarding');
      } else {
        alert('회원가입은 되었지만 상태가 정상(A)이 아닙니다.');
      }
    } catch (error) {
      // 4. 에러 처리
      if (error.response) {
        alert(`회원가입 실패: ${error.response.data.message || '서버 에러'}`);
      } else {
        alert('서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.');
      }
    }
  } /*

  // ✅ 임시 우회 (백엔드 호출 없이 바로 이동)
  //alert('임시 회원가입 완료! 온보딩 페이지로 이동합니다.');
  //navigate('/onboarding');

  /*
    try {
      // 회원가입 POST 요청
      const response = await axios.post('http://localhost:8080/api/signup', {
        username: username,
        handle: handle,
        password: password,
      });

      console.log('회원가입 성공:', response.data);

      // status: A 확인
      if (response.data.status === 'A') {
        alert('회원가입 성공! 이제 자가진단 테스트로 이동할게요.');
        navigate('/onboarding');
      }
    } catch (error) {
      if (error.response) {
        // 서버에서 내려준 에러 메시지 출력
        alert(`회원가입 실패: ${error.response.data.message}`);
      } else {
        // 네트워크 문제 등
        alert('서버와 연결할 수 없습니다. 잠시 후 다시 시도해주세요.');
      }
    }
      */
  //};

  const handleSignup = () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // ✅ 임시 회원가입 처리
    alert('회원가입 완료! 자가진단 페이지로 이동합니다.');
    navigate('/onboarding');
  };

  return (
    <div className="signup-page">
      <StatusBar />

      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="뒤로가기" className="back-icon" />
        </button>
      </div>

      <div className="signup-wrapper">
        <div className="form-group">
          <label className="input-label">이름 입력</label>
          <input
            className="signup-input"
            placeholder="이름을 입력해주세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="input-label">아이디 입력</label>
          <div className="signup-id-row">
            <input
              className="signup-input id-input"
              placeholder="아이디를 입력해주세요"
              onChange={(e) => setHandle(e.target.value)}
            />
            <button className="duplicate-button">중복 확인</button>
          </div>
          <p className="input-helper">4~12자 / 영문 소문자, 숫자 조합 가능</p>
        </div>

        <div className="form-group">
          <label className="input-label">비밀번호 입력</label>
          <input
            type="password"
            className="signup-input"
            placeholder="비밀번호를 입력해주세요"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            className="signup-input"
            placeholder="비밀번호를 확인해주세요"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <p className="input-helper">
            6~20자 / 영문 대문자, 소문자, 숫자 중 2가지 이상
          </p>
        </div>
        <button className="signup-submit" onClick={handleSignup}>
          가입하기
        </button>
      </div>
    </div>
  );
}

export default SignupPage;
