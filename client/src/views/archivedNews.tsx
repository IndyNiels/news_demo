import React, { useState, useEffect } from 'react';
import { type NewsItemData } from '../types/news';
import NewsItem from '../components/newsItem.tsx';
import { fetchArchivedArticles, deleteArticle } from '../api/articles';


const ArchivedNews: React.FC = () => {
  const [news, setNews] = useState<NewsItemData[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [processingId, setProcessingId] = useState<string | null>(null);


  useEffect(() => {
    setLoading(true);
    fetchArchivedArticles()
      .then(setNews)
      .catch((err) => {
        console.error(err);
        setError('Failed to load archived articles');
      })
      .finally(() => setLoading(false));
  }, []);

  const handleDelete = async (id: string) => {
    setProcessingId(id)
    try {
      await deleteArticle(id);

      const newNews = [...news];
      for (let i = 0; i < newNews.length; i++) {
        if (newNews[i].id === id) {
          newNews.splice(i, 1);
          break;
        }
      }
      setNews(newNews);
    }
    catch (error) {
      console.error('Failed to delete article:', error);
      setError('Failed to delete article');
      setTimeout(() => setError(null), 5000);
    }
    finally {
      setProcessingId(null)
    }

  };
  return (
    <div className="w-full bg-gray-100 p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-4"> Archived News</h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      {loading ? (
        <div className="text-center py-8">Loading...</div>
      ) : news.length === 0 ? (
        <div className="text-center py-8 text-gray-500">No archived articles</div>
      ) : (
        news.map(item => (
          <NewsItem
            key={item.id}
            item={item}
            onDelete={handleDelete}
            isProcessing={processingId === item.id}
          />
        ))
      )}

    </div>
  );
};

export default ArchivedNews;
