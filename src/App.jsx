import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import ListingsPage from 'pages/ListingsPage';
import NotFoundPage from 'pages/NotFoundPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListingsPage />} />
        <Route path="/listings" element={<ListingsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
