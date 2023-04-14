import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Analytcs from './pages/Analytcs';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analytcs" element={<Analytcs />} />
      </Routes>
    </Router>
  );
}
