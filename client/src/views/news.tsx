import React, { useState, useEffect } from 'react';
import { type NewsItemData } from '../types/news';
import NewsItem from '../components/newsItem';
import { fetchNewArticles, archiveArticle } from '../api/articles';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItemData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [processingId, setProcessingId] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchNewArticles()
      .then(setNews)
      .catch((err) => {
        console.error(err);
        setError('Failed to load news articles');
      })
      .finally(() => setLoading(false));
  }, []);


  const handleArchive = async (id: string) => {
    setProcessingId(id)
    try {
      const updated = await archiveArticle(id);
      const newNews = [...news];

      // Functional approach was discarded since it does not use break. I understand loops and breaks to be more performant if large arrays are used without pagination.
      for (let i = 0; i < newNews.length; i++) {
        if (newNews[i].id === id) {
          newNews[i].archiveDate = updated.archiveDate;
          break;
        }
      }
      setNews(newNews);
    }
    catch (error) {
      console.error('Failed to archive article:', error);
    }
    finally {
      setProcessingId(null)

    }
  };

  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4">News</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}
      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : (
        news.filter((n: NewsItemData) => !n.archiveDate).map(item => (
          <NewsItem
            key={item.id}
            item={item}
            onArchive={handleArchive}
            onDelete={() => { }}
            isProcessing={processingId === item.id}
          />
        ))
      )}
    </div>
  );
};

export default News;
