import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import StatusBar from '../components/StatusBar';
import backIcon from '../assets/images/back.svg';
import '../assets/styles/DescriptionPage.css';
import placeholderImage from '../assets/images/placeholderimage.png';

function DescriptionPage() {
  const navigate = useNavigate();

  // 🔹 목업 기사 데이터 3개
  const articles = [
    {
      groupName: '한겨레',
      title:
        '유럽 기업 “철수” 언급에 김영훈 장관 “노란봉투법은 국제기준 맞추는 것”',
      pubDate: '2025-07-29 오후 5:43',
      image: placeholderImage,
      description:
        '김영훈 고용노동부 장관이 노란봉투법을 둘러싼 유럽계 기업들의 우려를 일축했다. 그는 이 법이 국내 노동 현실을 국제 기준에 맞추고 안정적 경제 성장을 위한 토대라고 주장했다. 29일 정부서울청사 브리핑에서 김 장관은 “산업 생태계 변화, 글로벌 공급망 위기에 대응하기 위해 국제적으로 원·하청의 책임 있는 관계를 요구하고 있다”며 “유럽의 공급망실사법과 같은 책임 있는 경영이 글로벌 스탠더드”라고 말했다. 이어 “무역과 통상에서도 국제 기준을 맞추는 것이 중요하다”고 했다. 그는 또 “OECD는 노동시장 이중구조와 격차 문제를 우리 경제의 저성장 원인으로 본다”며 “원·하청 격차를 줄이는 노조법 2·3조 개정은 ‘진짜 성장법’”이라고 강조했다. 이는 주한유럽상공회의소가 노란봉투법에 대해 기업인을 잠재적 범죄자로 만들고 형사처벌 우려로 경영이 위축될 수 있다는 입장을 밝힌 데 대한 답변이다. 김 장관은 “유럽은 한-EU FTA 체결 당시 한국에 ILO 핵심 협약 비준을 요청한 적이 있다”며 “자유무역을 하려면 국제 기준을 맞추지 못한 나라는 저임금 덤핑으로 보게 된다”고 말했다. 실제로 2019년 EU는 한국 정부가 ILO 협약 비준을 이행하지 않는다며 무역분쟁 절차를 개시한 바 있다.',
    },
    {
      groupName: '조선일보',
      title: '미국 MASGA 외치고, 국내선 조선에 노란봉투법 옥죄기',
      pubDate: '2025-07-28 오전 12:51',
      image: placeholderImage,
      description:
        '“미국 조선업은 위대하게 만들겠다면서 한국 조선업은 발목을 잡는다니 이걸 어떻게 이해하나.” 28일 정부가 미국에 조선업 협력을 제안하며 관세 인하를 요청한 날, 국내 조선사 관계자는 여당이 노란봉투법 입법을 밀어붙이자 분통을 터뜨렸다. 조선업계는 이 법이 산업 경쟁력을 심각하게 훼손할 것이라며 반대해왔다. 노란봉투법은 불법파업에 대한 기업의 손배청구를 제한하고, 하청 노동자의 쟁의에 원청이 책임질 수 있는 길을 열어둔 법안이다. 노동계의 요구를 반영한 법으로, 이재명 대통령을 지지한 노동계의 ‘청구서’로도 불린다. 조선업계는 선박 건조에 수많은 협력업체가 투입되는 구조상, 법이 시행되면 원청이 수백 개 업체 노조와 단체교섭을 해야 할 상황이라고 우려한다. 한 대형 조선사 관계자는 “교섭만 하다 1년이 다 간다”고 했다. 불법파업으로 인한 손해배상 청구도 무력화될 경우, 천문학적인 지체상금이나 손실을 기업이 떠안게 된다는 점도 문제로 지적했다. “이런 상황에서 어느 기업이 투자를 하겠느냐”는 게 업계 반응이다.',
    },
    {
      groupName: 'KBS 뉴스',
      title: '노란봉투법, 국회 환노위 소위 여당 주도로 통과',
      pubDate: '2025-07-27 오전 12:57',
      image: placeholderImage,
      description:
        '이재명 대통령의 공약이자 노동계의 숙원이었던 ‘노란봉투법’(노조법 2·3조 개정안)이 28일 국회 환경노동위원회를 통과했다. 민주당과 정부는 7월 임시국회 내 처리를 목표로 하고 있으며, 2013년 쌍용차 노조 손배사건 이후 12년 만의 입법이다. 이날 환노위는 법안심사소위와 전체회의를 연이어 열고, 국민의힘 의원들이 퇴장한 가운데 민주당 주도로 법안을 통과시켰다. 개정안은 원청이 근로조건을 실질적으로 지배하면 사용자로 규정하고, 쟁의행위의 정당성 기준에 ‘경영상 결정’을 포함하는 등 원청 책임을 확대했다. 또 손배청구 요건을 강화해, 파업 노동자에 대해 책임 비율을 따지도록 하고, 노조 지위·참여 경위 등을 고려해 법원이 판단하도록 했다. 쟁의행위로 인한 손해에 대해 사용자가 책임을 면제할 수 있다는 조항도 신설됐고, 책임 면제는 법 시행 이전 손해에도 적용 가능하도록 부칙에 담겼다.',
    },
  ];

  // 🔹 목업 관련 뉴스 5개
  const relatedNews = [
    {
      groupName: 'JTBC',
      title: '속전속결 노란봉투법 ...',
      image: placeholderImage,
    },
    {
      groupName: '연합뉴스',
      title: '전 정부 거부 법안 ...',
      image: placeholderImage,
    },
    {
      groupName: '동아일보',
      title: '폐기 열달만에 통과',
      image: placeholderImage,
    },
    {
      groupName: 'MBC',
      title: '국민의 힘, 시간 더 필요',
      image: placeholderImage,
    },
    {
      groupName: '매일경제',
      title: '암참도 심각한 우려',
      image: placeholderImage,
    },
  ];

  return (
    <div className="description-page">
      <StatusBar />

      {/* 뒤로가기 버튼 */}
      <div className="back-button-container">
        <button className="back-button" onClick={() => navigate(-1)}>
          <img src={backIcon} alt="뒤로가기" className="back-icon" />
        </button>
      </div>

      {/* 중앙 키워드 */}
      <h1 className="keyword-title">법안</h1>

      {/* 본문 기사 3개 */}
      <div className="article-list">
        {articles.map((article, idx) => (
          <div className="article-card" key={idx}>
            <div className="article-header">
              <img
                src={`/assets/news-icons/${article.groupName}.png`}
                alt={article.groupName}
                className="news-icon"
              />
              <span className="news-source">{article.groupName}</span>
            </div>
            <h2 className="article-title">{article.title}</h2>
            <p className="article-date">{article.pubDate}</p>
            <img
              src={article.image}
              alt={article.title}
              className="article-image"
            />
            <h3 className="summary-title">뉴스 요약본</h3>
            <p className="article-summary">{article.description}</p>
          </div>
        ))}
      </div>

      {/* 가로 스크롤 추천 뉴스 */}
      <div className="related-news-section">
        <h2 className="related-title">이 주제, 다른 시선에서 보면 어떨까요?</h2>
        <div className="related-scroll-container">
          {relatedNews.map((news, idx) => (
            <div className="related-card" key={idx}>
              <img
                src={news.image}
                alt={news.title}
                className="related-thumbnail"
              />
              <div className="related-info">
                <div className="related-header">
                  <img
                    src={`/assets/news-icons/${news.groupName}.png`}
                    alt={news.groupName}
                    className="news-icon-small"
                  />
                  <span className="news-source-small">{news.groupName}</span>
                </div>
                <p className="related-title-text">{news.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DescriptionPage;
