import React from 'react'
import { motion } from 'framer-motion'
import logo from '../assets/image/logo.svg'
import { Link } from 'react-router-dom';

function TopPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {/* ヒーローセクション */}
      <section className="hero-section">
        <img src={logo} alt="SuperUser Logo" className="superuser-logo" />
        <div className="scroll-indicator">
          SCROLL
          <div className="line-container">
            <div className="line-base"></div>
            <div className="line-anim"></div>
          </div>
        </div>
      </section>

      <section className="latest-releases-section">
        <div className="title-bar">
          <h2 className="section-title">Latest releases</h2>
        </div>

        <div className="releases-grid">
          <div className="release-item">
            <a href="https://soundcloud.com/sweetmusicofc/premiere-superuser-emergent-phenomena-plus-future-records" target="_blank" rel="noopener noreferrer">
              <div className="release-image">
                  <img src="/src/assets/image/album1.png" alt="Emergent Phenomena" />
              </div>
              <div className="release-text">
                <p className="release-type">Release</p>
                <p className="release-name">Emergent Phenomena</p>
              </div>
            </a>
          </div>

          <div className="release-item">
            <a href="https://soundcloud.com/xv_superuser/deeptech-house-live-mix-for-output-sankeys-penthouse" target="_blank" rel="noopener noreferrer">
              <div className="release-image">
                <img src="/src/assets/image/album2.png" alt="Deep/Tech House Mix" />
              </div>
              <div className="release-text">
                <p className="release-type">Mix</p>
                <p className="release-name">Deep/Tech House Live <br />Mix for OutPut</p>
              </div>
            </a>
          </div>

          <div className="release-item">
            <a href="https://www.mixcloud.com/xv_SuperUser/enter-the-vortal/" target="_blank" rel="noopener noreferrer">
              <div className="release-image">
                <img src="/src/assets/image/album3.png" alt="Enter The Vortal" />
              </div>
              <div className="release-text">
                <p className="release-type">Release</p>
                <p className="release-name">Enter The Vortal</p>
              </div>
            </a>
          </div>

          <div className="release-item">
            <a href="https://www.mixcloud.com/xv_SuperUser/sleazy-tech-house-and-groovy-basslines-live-sidebyside-oath-tokyo-202007/" target="_blank" rel="noopener noreferrer">
              <div className="release-image">
                <img src="/src/assets/image/album4.png" alt="Tech House & Groovy Basslines" />
              </div>
              <div className="release-text">
                <p className="release-type">Mix</p>
                <p className="release-name">Tech House &<br /> Groovy Basslines</p>
              </div>
            </a>
          </div>

          <div className="release-item">
            <a href="https://www.mixcloud.com/xv_SuperUser/xanadus-pleasuredome/" target="_blank" rel="noopener noreferrer">
              <div className="release-image">
                <img src="/src/assets/image/album5.png" alt="Xanadu's Pleasuredome" />
              </div>
              <div className="release-text">
                <p className="release-type">Mix</p>
                <p className="release-name">Xanadu's Pleasuredome</p>
              </div>
            </a>
          </div>

          <div className="release-item">
            <a href="https://www.mixcloud.com/xv_SuperUser/drifting-the-astral-plane/" target="_blank" rel="noopener noreferrer">
              <div className="release-image">
                <img src="/src/assets/image/album6.png" alt="Shredding the Astral Plane" />
              </div>
              <div className="release-text">
                <p className="release-type">Mix</p>
                <p className="release-name">Shredding the Astral Plane</p>
              </div>
            </a>
          </div>
        </div>
        <Link to="/music">
          <button className="view-all-btn">View All Releases</button>
        </Link>
      </section>

      <div className="scroll-indicator mt-15">
        SCROLL
        <div className="line-container">
          <div className="line-base"></div>
          <div className="line-anim"></div>
        </div>
      </div>

      {/* Collaboration セクション */}
      <section className="collaboration-section">
        <div className="title-bar">
          <h2 className="section-title">Collaboration</h2>
        </div>

        <div className="collab-grid">
          <div className="collab-item">
            <div className="video-wrapper collab-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/zoXUAQSORsQ"
                title="SuperUser + Kana Kitty @ Re:birth Festival"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="collab-text">SuperUser + Kana Kitty<br/>@ Re:birth Festival</p>
          </div>
          <div className="collab-item">
            <div className="video-wrapper collab-video-wrapper">
              <iframe
                src="https://www.youtube.com/embed/FXMTxwxbt9g"
                title="SuperUser + Kana Kitty @ UNBOUND"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="collab-text">SuperUser + Kana Kitty<br/>@ UNBOUND</p>
          </div>
        </div>
        <Link to="/collaboration">
          <button className="view-all-btn">View All</button>
        </Link>
      </section>

      <div className="scroll-indicator mt-15">
        SCROLL
        <div className="line-container">
          <div className="line-base"></div>
          <div className="line-anim"></div>
        </div>
      </div>

    </motion.div>
  )
}

export default TopPage
