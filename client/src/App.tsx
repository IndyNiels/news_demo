import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import News from './views/news';
import ArchivedNews from './views/archivedNews';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen min-w-screen bg-gray-100 text-gray-900">
        <div className="w-full px-4 py-6">
          {/* Navigation */}
          <nav className="bg-white shadow-md p-4 flex justify-between items-center">
            <div className="text-xl font-semibold">News Portal</div>
            <div className="space-x-4">
              <Link to="/" className="text-blue-600 hover:text-blue-800 font-medium">
                News
              </Link>
              <Link to="/archived" className="text-blue-600 hover:text-blue-800 font-medium">
                Archived
              </Link>
            </div>
          </nav>

          {/* Main content */}
          <main className="p-6 w-[70%] mx-auto">
            <Routes>
              <Route path="/" element={<News />} />
              <Route path="/archived" element={<ArchivedNews />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;


