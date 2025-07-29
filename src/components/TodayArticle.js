import React from 'react';
import '../assets/styles/TodayArticle.css';
import placeholderImage from '../assets/images/placeholder.png';

function TodayArticle({ news, sizeType }) {
  const sizes = {
    1: { width: 343, height: 248 },
    2: { width: 343, height: 124 },
    3: { width: 164, height: 148 },
  };

  return (
    <div
      className={`today-article size-${sizeType}`}
      style={{
        width: sizes[sizeType].width,
        height: sizes[sizeType].height,
        backgroundImage: `
          linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      }}
    >
      <img
        src={news.image && news.image !== '' ? news.image : placeholderImage}
        alt={news.title}
        className="today-thumbnail"
      />
      <div className="overlay"></div>
      <p className="article-title">{news.title}</p>
    </div>
  );
}
export default TodayArticle;
