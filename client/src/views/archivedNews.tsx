import React, { useState, useEffect } from 'react';
import { type NewsItemData } from '../types/news';
import NewsItem from '../components/newsItem.tsx';
import { fetchArticles, deleteArticle } from '../api/articles';


const ArchivedNews: React.FC = () => {
  const [news, setNews] = useState<NewsItemData[]>([]);

  useEffect(() => {
    fetchArticles().then(setNews).catch(console.error);
  }, []);

  const handleDelete = async (id: string) => {
    await deleteArticle(id); // Call your backend API to delete

    const newNews = [...news]; // Clone the current news array

    for (let i = 0; i < newNews.length; i++) {
      if (newNews[i].id === id) {
        newNews.splice(i, 1); // Remove the item at index i
        break;
      }
    }

    setNews(newNews); // Update state to trigger re-render
  };
  return (
    <div>
      <h2>Archived News</h2>
      {news.filter(n => n.archiveDate).map(item => (
        <NewsItem key={item.id} item={item} onArchive={() => { }} onDelete={handleDelete} />
      ))}
    </div>
  );
};

export default ArchivedNews;
