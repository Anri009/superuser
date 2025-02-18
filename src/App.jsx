import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import FollowMe from './components/FollowMe';
import superuserVideo2 from './assets/video/superuser_video7.mp4';

import TopPage from './pages/TopPage';
import MusicPage from './pages/MusicPage';
import BrewcastPage from './pages/BrewcastPage';
import CollaborationPage from './pages/CollaborationPage';
import UnboundPage from './pages/UnboundPage';
import ContactPage from './pages/ContactPage';
import './styles/common.scss';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TopPage />} />
        <Route path="/music" element={<MusicPage />} />
        <Route path="/brewcast" element={<BrewcastPage />} />
        <Route path="/collaboration" element={<CollaborationPage />} />
        <Route path="/unbound" element={<UnboundPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="app-container">
      <div className="video-background">
        <video autoPlay muted loop playsInline>
          <source src={superuserVideo2} type="video/mp4" />
        </video>
      </div>
      <Router>
        <Header />
        <AnimatedRoutes />
        <FollowMe />
      </Router>
    </div>
  );
}

export default App;
