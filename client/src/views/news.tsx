import React, { useState, useEffect } from 'react';
import { type NewsItemData } from '../types/news';
import NewsItem from '../components/newsItem';
import { fetchArticles, archiveArticle } from '../api/articles';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItemData[]>([]);

  useEffect(() => {
    fetchArticles().then(setNews).catch(console.error);
  }, []);


  const handleArchive = async (id: string) => {
    const updated = await archiveArticle(id);

    const newNews = [...news];

    for (let i = 0; i < newNews.length; i++) {
      if (newNews[i].id === id) {
        newNews[i].archiveDate = updated.archiveDate;
        break;
      }
    }

    setNews(newNews);
  };


  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">News</h2>
      {news.filter((n: NewsItemData) => !n.archiveDate).map(item => (
        <NewsItem key={item.id} item={item} onArchive={handleArchive} onDelete={() => { }} />
      ))}
    </div>
  );
};

export default News;
