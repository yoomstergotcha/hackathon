import React from 'react';
import StatusBar from '../components/StatusBar';
import BottomNavBar from '../components/BottomNavBar';
import backIcon from '../assets/images/back.svg';
import { useNavigate } from 'react-router-dom';
import searchIcon from '../assets/images/search.svg';
import placeholderImage from '../assets/images/placeholder.png';
import '../assets/styles/Alarm.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Alarm() {
  const keywords = [
    '전체',
    '대통령실',
    '국회',
    '정당',
    '선거',
    '안보/국방',
    '외교',
    '법안',
  ];
  // 프론트 키워드 → 백엔드 group 매핑
  const keywordMap = {
    대통령실: 'president',
    국회: 'congress',
    정당: 'party',
    선거: 'election',
    정부부처: 'ministry',
    '안보/국방': 'defense',
    외교: 'diploymacy', // 오타: diplomacy가 맞을 듯?
    사회정책: 'policy',
    정치일반: 'politics',
  };

  const [selectedKeyword, setSelectedKeyword] = useState(null);
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);

        let url;
        let params = {};

        if (selectedKeyword && selectedKeyword !== '전체') {
          url = 'https://api.newsto.r-e.kr/alarms';
          params = { group: keywordMap[selectedKeyword] };
        } else {
          url = 'https://api.newsto.r-e.kr/news/latest';
        }

        const res = await axios.get(url, { params });
        setArticles(res.data || []); // 응답 배열 저장
      } catch (error) {
        console.error('알림 데이터 로드 실패:', error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [selectedKeyword]);

  //const articles = [
  //  {
  //    id: 1,
  //    title: '李대통령, 포스코이앤씨 사고에 “미필적 고의 살인 아닌가” ',
  //    summary:
  {
    /*      '이재명 대통령은 포스코이앤씨에서 올해 5번째 산업재해 사망 사고가 발생한 데 대해 “미필적 고의에 의한 살인”이라며 강하게 비판하고, 산업현장 안전 강화를 지시했다.',
      thumbnail: placeholderImage,
    },
    {
      id: 2,
      title: '국회, 예산안 처리 두고 대치',
      summary:
        '이재명 대통령은 포스코이앤씨에서 올해 5번째 산업재해 사망 사고가 발생한 데 대해 “미필적 고의에 의한 살인”이라며 강하게 비판하고, 산업현장 안전 강화를 지시했다.',
      thumbnail: placeholderImage,
    },
    {
      id: 3,
      title: '국회, 예산안 처리 두고 대치',
      summary:
        '이재명 대통령은 포스코이앤씨에서 올해 5번째 산업재해 사망 사고가 발생한 데 대해 “미필적 고의에 의한 살인”이라며 강하게 비판하고, 산업현장 안전 강화를 지시했다.',
      thumbnail: placeholderImage,
    },
    {
      id: 4,
      title: '국회, 예산안 처리 두고 대치',
      summary: '여야가 예산안 처리를 두고 격렬한 공방을 벌이고 있다...',
      thumbnail: placeholderImage,
    },
    {
      id: 5,
      title: '국회, 예산안 처리 두고 대치',
      summary: '여야가 예산안 처리를 두고 격렬한 공방을 벌이고 있다...',
      thumbnail: placeholderImage,
    },
    {
      id: 6,
      title: '국회, 예산안 처리 두고 대치',
      summary: '여야가 예산안 처리를 두고 격렬한 공방을 벌이고 있다...',
      thumbnail: placeholderImage,
    },
    {
      id: 7,
      title: '국회, 예산안 처리 두고 대치',
      summary: '여야가 예산안 처리를 두고 격렬한 공방을 벌이고 있다...',
      thumbnail: placeholderImage,
    },
    {
      id: 8,
      title: '국회, 예산안 처리 두고 대치',
      summary: '여야가 예산안 처리를 두고 격렬한 공방을 벌이고 있다...',
      thumbnail: placeholderImage,
    },
    {
      id: 9,
      title: '국회, 예산안 처리 두고 대치',
      summary: '여야가 예산안 처리를 두고 격렬한 공방을 벌이고 있다...',
      thumbnail: placeholderImage,
    },
  ]; */
  }

  return (
    <div className="alarm-container">
      <StatusBar />

      {/* 상단 헤더 */}
      <div className="alarm-header">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="뒤로가기" className="icon" />
        </button>
        <span className="header-title">알림</span>
        <img src={searchIcon} alt="검색" className="icon" />
      </div>

      {/* 키워드 버튼 행 */}
      <div className="keyword-row">
        {keywords.map((kw, idx) => (
          <button
            key={idx}
            className={`keyword-btn ${selectedKeyword === kw ? 'active' : ''}`}
            onClick={() => setSelectedKeyword(kw)}
          >
            {kw}
          </button>
        ))}
      </div>

      {/* 기사 리스트 */}
      <div className="alarm-content">
        <div className="timeline-line"></div>
        {articles.map((article, index) => (
          <div className="article-item" key={index}>
            <div className="timeline">
              <div className="circle"></div>
            </div>

            <div className="article-card">
              <div className="article-thumb-wrapper">
                <img
                  src={article.image || placeholderImage}
                  alt={article.title}
                  className="article-thumb"
                />
                <div className="overlay"></div>
                <h3 className="article-title">{article.title}</h3>
              </div>
              <p className="article-summary">{article.description}</p>
            </div>
          </div>
        ))}
      </div>

      <BottomNavBar />
    </div>
  );
}

export default Alarm;
