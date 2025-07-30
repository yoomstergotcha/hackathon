import React from 'react';
import '../assets/styles/StatusBar.css';
import cellularIcon from '../assets/images/cellular.svg';
import wifiIcon from '../assets/images/wifi.svg';
import batteryIcon from '../assets/images/battery.svg';

function StatusBar({ backgroundColor = '#fff' }) {
  return (
    <div className="status-bar-wrapper" style={{ backgroundColor }}>
      <div className="status-bar-inner">
        <div className="status-left-time">
          <div className="status-time">9:41</div>
        </div>
        <div className="status-dynamic-level"></div>
        <div className="status-level">
          <div className="status-icons">
            <img src={cellularIcon} alt="Cellular" className="status-icon" />
            <img src={wifiIcon} alt="WiFi" className="status-icon" />
            <img
              src={batteryIcon}
              alt="Battery"
              className="status-icon battery"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatusBar;
