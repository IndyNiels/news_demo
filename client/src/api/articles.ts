import axios from 'axios';

const API_BASE = 'http://localhost:3001/routes';

export const fetchArticles = async () => {
  const response = await axios.get(`${API_BASE}/articles`);
  console.log(response.data)
  return response.data;
};

export const deleteArticle = async (id: string) => {
  const response = await axios.delete(`${API_BASE}/articles/${id}`);
  return response.data;
};


export const archiveArticle = async (id: string) => {
  const response = await axios.put(`${API_BASE}/articles/${id}`, {
    archiveDate: new Date().toISOString(),
  });
  return response.data;
};

// Add more functions (e.g., createArticle, updateArticle) as needed
