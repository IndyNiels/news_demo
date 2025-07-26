import React from 'react';
import { type NewsItemData } from '../types/news.ts';

interface Props {
  item: NewsItemData;
  onArchive: (id: string) => void;
  onDelete: (id: string) => void;
}

const NewsItem: React.FC<Props> = ({ item, onArchive, onDelete }) => {
  return (
    <div className="news-item bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 space-y-4">
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      {!item.archiveDate && (
        <>
          <button onClick={() => onArchive(item.id)}>Archive</button>
        </>
      )}
      {item.archiveDate && (
        <button onClick={() => onDelete(item.id)}>Remove</button>
      )}
    </div>
  );
};

export default NewsItem;
