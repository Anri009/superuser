import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import FollowMe from './components/FollowMe';
import superuserVideo2 from './assets/video/superuser_video9.mp4';
// import superuserVideoWebM from './assets/video/superuser_video9.webm';
import { useEffect } from 'react';

import TopPage from './pages/TopPage';
import MusicPage from './pages/MusicPage';
import BrewcastPage from './pages/BrewcastPage';
import CollaborationPage from './pages/CollaborationPage';
import UnboundPage from './pages/UnboundPage';
import ContactPage from './pages/ContactPage';
import './styles/common.scss';


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // 100ms 遅延
  }, [pathname]);

  return null;
}


function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<TopPage />} exact />
        <Route path="/music" element={<MusicPage />} exact />
        <Route path="/brewcast" element={<BrewcastPage />} exact />
        <Route path="/collaboration" element={<CollaborationPage />} exact />
        <Route path="/unbound" element={<UnboundPage />}exact />
        <Route path="/contact" element={<ContactPage />} exact/>
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Header />
      <ScrollToTop />
      <div className="app-container">
        <div className="video-background">
          <video autoPlay muted loop playsInline controls preload="metadata">
            {/* <source src={superuserVideoWebM} type="video/webm" /> */}
            <source src={superuserVideo2} type="video/mp4" />
          </video>
        </div>
        <AnimatedRoutes />
        <FollowMe />
      </div>
    </Router>
  );
}

export default App;
