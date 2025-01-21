import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopPage from './pages/TopPage';
import MusicPage from './pages/MusicPage';
import BrewcastPage from './pages/BrewcastPage';
import KanaKittyPage from './pages/KanaKittyPage';
import UnboundPage from './pages/UnboundPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/brewcast" element={<BrewcastPage />} />
        <Route path="/kana-kitty" element={<KanaKittyPage />} />
        <Route path="/unbound" element={<UnboundPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
