import React from 'react';
import { type NewsItemData } from '../types/news.ts';

interface Props {
  item: NewsItemData;
  onArchive?: (id: string) => void;
  onDelete?: (id: string) => void;
  isProcessing?: boolean;
}

const NewsItem: React.FC<Props> = ({ item, onArchive, onDelete, isProcessing }) => {

  return (
    <div className="news-item bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200 space-y-4">
      <h3>{item.title}</h3>
      <p>{item.content}</p>
      <p>Author : {item.author}</p>
      <p> Date : {item.date}</p>
      {!item.archiveDate && (
        <>
          <button onClick={() => onArchive?.(item.id)}>
            {isProcessing ? 'Archiving...' : 'Archive'}
          </button>
        </>
      )}
      {item.archiveDate && (
        <>
          <p>Achive Date : {item.archiveDate}</p>
          <button onClick={() => onDelete?.(item.id)}>
            {isProcessing ? 'Removing...' : 'Remove'}
          </button>
        </>
      )}
    </div>
  );
};

export default NewsItem;
