import React, { useEffect, useState } from 'react';
import axios from 'axios';
import StatusBar from '../components/StatusBar';
import '../assets/styles/MainPage.css';
import appLogo from '../assets/images/logo.svg';
import SearchIcon from '../components/SearchIcon';
import placeholderImage from '../assets/images/placeholder.png';
import TodayArticle from '../components/TodayArticle';

function MainPage() {
  const [latestNews, setLatestNews] = useState([]);
  const [todayNews, setTodayNews] = useState([]);

  useEffect(() => {
    axios
      .get('/news/latest')
      .then((res) => {
        const data = res.data;
        // 상단 최신 뉴스 10개
        setLatestNews(data.slice(0, 10));

        // 오늘의 기사 30개 (세로 스크롤)
        setTodayNews(data.slice(0, 30));
      })
      .catch((err) => {
        console.error('뉴스 로딩 실패:', err);
      });
  }, []);

  const pattern = [1, 2, 3, 3, 2, 1];

  return (
    <div className="main-container">
      <StatusBar />

      {/* 검색바 영역 */}
      <div className="search-bar-wrapper">
        <div className="logo-section">
          <img src={appLogo} alt="logo" className="logo-img" />
          <span className="logo-text">News To.</span>
        </div>
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div>

      {/* 최신 뉴스 가로 스크롤 */}
      <div className="news-scroll-container">
        {latestNews.slice(0, 10).map((news, index) => (
          <div key={index} className="news-card">
            <a href={news.link} target="_blank" rel="noopener noreferrer">
              <img
                src={
                  news.image && news.image !== ''
                    ? news.image
                    : placeholderImage
                }
                alt={news.title}
                className="news-thumbnail"
              />
            </a>
            <p className="news-title">{news.title || '기사 제목 없음'}</p>
            <p className="news-source">
              {/* 언론사 수동 입력 */}
              {index === 0 && 'JTBC'}
              {index === 1 && '연합뉴스'}
              {index === 2 && '중앙일보'}
              {/* 나머지 수동 추가 */}
            </p>
          </div>
        ))}
      </div>

      {/* 오늘의 기사 */}
      <div className="today-news-section">
        <h2 className="today-news-title">오늘의 기사</h2>

        {todayNews.map((news, i) => {
          const type = pattern[i % pattern.length]; // [1,2,3,3,2,1]
          return type === 3 ? (
            <div className="today-news-row">
              <TodayArticle news={news} sizeType={3} />
              <TodayArticle news={todayNews[i + 1]} sizeType={3} />
            </div>
          ) : (
            <TodayArticle news={news} sizeType={type} />
          );
        })}
      </div>
    </div>
  );
}

export default MainPage;
