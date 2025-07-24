import React, { useState } from 'react';
import { type NewsItemData } from '../types/news';
import NewsItem from '../components/newsItem.tsx';

const ArchivedNews: React.FC = () => {
  const [news, setNews] = useState<NewsItemData[]>([
    { id: '2', title: 'Old News', content: 'This is old', isArchived: true },
  ]);

  const handleArchive = () => { };
  const handleDelete = (id: string) => {
    setNews(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Archived News</h2>
      {news.filter(n => n.isArchived).map(item => (
        <NewsItem key={item.id} item={item} onArchive={handleArchive} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ArchivedNews;
