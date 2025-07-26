import axios from 'axios';

const API_BASE = 'http://localhost:3001/routes';

export const fetchNewArticles = async () => {
  const response = await axios.get(`${API_BASE}/articles?archived=false`);
  console.log(response.data)
  return response.data;
};

export const fetchArchivedArticles = async () => {
  const response = await axios.get(`${API_BASE}/articles?archived=true`);
  console.log(response.data)
  return response.data;
};

// We've asumed a hard delete from the requirements instead of a performing a soft-delete. (since constraints gives a specify a fixed schema). We could have 
// removed the document from the UI state but that would have trumped any effect when refreshing the browser.
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
