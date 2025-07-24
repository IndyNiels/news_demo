import React, { useState } from 'react';
import { type NewsItemData } from '../types/news';
import NewsItem from '../components/newsItem';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItemData[]>([
    { id: '1', title: 'Hello', content: 'World', isArchived: false },
    { id: '1', title: 'Hello', content: 'World', isArchived: false },
  ]);

  const handleArchive = (id: string) => {
    setNews(prev => prev.map(item =>
      item.id === id ? { ...item, isArchived: true } : item
    ));
  };

  const handleDelete = (id: string) => {
    setNews(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">News</h2>
      {news.filter(n => !n.isArchived).map(item => (
        <NewsItem key={item.id} item={item} onArchive={handleArchive} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default News;
