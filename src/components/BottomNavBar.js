import React from 'react';
import { useNavigate } from 'react-router-dom';
import homeIcon from '../assets/images/home.svg';
import bellIcon from '../assets/images/bell.svg';
import myIcon from '../assets/images/my.svg';
import '../assets/styles/BottomNavBar.css';

function BottomNavBar({ active }) {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav-bar">
      <div
        className={`nav-item ${active === 'alert' ? 'active' : ''}`}
        onClick={() => navigate('/alarm')}
      >
        <img src={bellIcon} alt="알림" className="nav-icon" />
        <span className="nav-text">알림</span>
      </div>

      <div
        className={`nav-item ${active === 'home' ? 'active' : ''}`}
        onClick={() => navigate('/main')}
      >
        <img src={homeIcon} alt="홈" className="nav-icon" />
        <span className="nav-text">홈</span>
      </div>

      <div
        className={`nav-item ${active === 'my' ? 'active' : ''}`}
        onClick={() => navigate('/mypage')}
      >
        <img src={myIcon} alt="마이" className="nav-icon" />
        <span className="nav-text">마이</span>
      </div>
    </div>
  );
}

export default BottomNavBar;
