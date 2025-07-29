import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatusBar from '../components/StatusBar';
import BottomNavBar from '../components/BottomNavBar';
import TodayArticle from '../components/TodayArticle'; // 오늘의 기사 카드
import placeholderImage from '../assets/images/placeholder.png';
import searchIcon from '../assets/images/search.svg';
import appIcon from '../assets/images/app-logo.svg';
import '../assets/styles/MainPage.css';

function MainPage() {
  const [latestNews, setLatestNews] = useState([]);
  const [todayNews, setTodayNews] = useState([]);
  const pattern = [1, 2, 3, 2, 1];

  // 목업 데이터
  //const [latestNews] = useState([
  //  { title: 'JTBC: 오늘의 주요 뉴스', link: '#', image: '' },
  //  { title: '연합뉴스: 핫이슈 속보', link: '#', image: '' },
  //  { title: '중앙일보: 아침 헤드라인', link: '#', image: '' },
  //  { title: '경향신문: 정치 뉴스', link: '#', image: '' },
  //  { title: '한국일보: 경제 핫토픽', link: '#', image: '' },
  //  { title: '조선일보: 국제 뉴스', link: '#', image: '' },
  //  { title: '한겨레: 사회 이슈', link: '#', image: '' },
  //  { title: 'KBS 뉴스: 속보 모음', link: '#', image: '' },
  //  { title: 'SBS 뉴스: 라이프 스타일', link: '#', image: '' },
  //  { title: 'YTN: 오늘의 마지막 뉴스', link: '#', image: '' },
  //]);

  //const [todayNews] = useState([
  //  { title: '오늘의 심층 기사 1', link: '#', image: '' },
  //  { title: '오늘의 심층 기사 2', link: '#', image: '' },
  //  { title: '오늘의 심층 기사 3', link: '#', image: '' },
  //  { title: '오늘의 심층 기사 4', link: '#', image: '' },
  // { title: '오늘의 심층 기사 5', link: '#', image: '' },
  // { title: '오늘의 심층 기사 6', link: '#', image: '' },
  //]);

  // const pattern = [1, 2, 3, 2, 1]; // 카드 배치 패턴

  // ✅ 최신 뉴스 API
  useEffect(() => {
    axios
      .get('https://api.newsto.r-e.kr/news/latest')
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const formattedNews = res.data.map((news) => ({
            title: news.title,
            link: news.link,
            image:
              news.image && news.image !== '' ? news.image : placeholderImage,
          }));
          setLatestNews(formattedNews);
        }
      })
      .catch((err) => console.error('최신 뉴스 불러오기 실패:', err));
  }, []);

  // ✅ 오늘의 기사 API
  useEffect(() => {
    axios
      .get('https://api.newsto.r-e.kr/news/random')
      .then((res) => {
        if (res.data && Array.isArray(res.data)) {
          const formattedNews = res.data.map((news) => ({
            title: news.title,
            link: news.link,
            image:
              news.image && news.image !== '' ? news.image : placeholderImage,
          }));
          setTodayNews(formattedNews.slice(0, 6)); // 최대 6개만 사용
        }
      })
      .catch((err) => console.error('오늘의 기사 불러오기 실패:', err));
  }, []);

  return (
    <div className="main-wrapper">
      <StatusBar />

      {/* 검색바 */}
      <div className="search-bar">
        <img src={appIcon} alt="앱 아이콘" className="app-icon" />
        <input className="search-input" placeholder="검색어를 입력하세요" />
        <img src={searchIcon} alt="검색" className="search-icon" />
      </div>
      <div className="main-scroll-content">
        {/* 최신 뉴스 */}
        <h2 className="section-title">최신순</h2>
        <div className="news-scroll-container">
          {latestNews.slice(0, 10).map((news, index) => (
            <div key={index} className="news-card">
              <a href={news.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={news.image}
                  alt={news.title}
                  className="news-thumbnail"
                />
              </a>
              <p className="news-title">{news.title || '기사 제목 없음'}</p>
              <p className="news-source">
                {index === 0 && 'JTBC'}
                {index === 1 && '연합뉴스'}
                {index === 2 && '중앙일보'}
                {index > 2 && '기타 언론'}
              </p>
            </div>
          ))}
        </div>

        {/* 오늘의 기사 */}
        <div className="today-news-section">
          <h2 className="today-news-title">오늘의 기사</h2>
          {todayNews.map((news, i) => {
            const type = pattern[i % pattern.length]; // 카드 배치 패턴
            return type === 3 ? (
              <div className="today-news-row" key={i}>
                <TodayArticle news={news} sizeType={3} />
                {todayNews[i + 1] && (
                  <TodayArticle news={todayNews[i + 1]} sizeType={3} />
                )}
              </div>
            ) : (
              <TodayArticle key={i} news={news} sizeType={type} />
            );
          })}
        </div>
      </div>
      <BottomNavBar active="home" />
    </div>
  );
}

export default MainPage;
