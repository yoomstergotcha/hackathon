import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StartPage from './pages/StartPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignupPage';
import OnboardingStartPage from './pages/OnboardingStartPage';
import OnboardingQuestionPage1 from './pages/OnboardingQuestionPage1';
import OnboardingQuestionPage2 from './pages/OnboardingQuestionPage2';
import OnboardingQuestionPage3 from './pages/OnboardingQuestionPage3';
import OnboardingQuestionPage4 from './pages/OnboardingQuestionPage4';
import OnboardingQuestionPage5 from './pages/OnboardingQuestionPage5';
import OnboardingQuestionPage6 from './pages/OnboardingQuestionPage6';
import OnboardingQuestionPage7 from './pages/OnboardingQuestionPage7';
import OnboardingResultPage from './pages/OnboardingResultPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-frame">
        <Router>
          <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/onboarding" element={<OnboardingStartPage />} />
            <Route
              path="/onboardingquestion1"
              element={<OnboardingQuestionPage1 />}
            />

            <Route
              path="/onboardingquestion2"
              element={<OnboardingQuestionPage2 />}
            />

            <Route
              path="/onboardingquestion3"
              element={<OnboardingQuestionPage3 />}
            />

            <Route
              path="/onboardingquestion4"
              element={<OnboardingQuestionPage4 />}
            />

            <Route
              path="/onboardingquestion5"
              element={<OnboardingQuestionPage5 />}
            />

            <Route
              path="/onboardingquestion6"
              element={<OnboardingQuestionPage6 />}
            />

            <Route
              path="/onboardingquestion7"
              element={<OnboardingQuestionPage7 />}
            />

            <Route
              path="/onboardingresult"
              element={<OnboardingResultPage />}
            />

            <Route path="/main" element={<MainPage />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
