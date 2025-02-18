import React from 'react'
import { motion } from 'framer-motion'

import {
  FaInstagram,
  FaSoundcloud,
  FaMixcloud,
  FaSpotify,
  FaFacebook,
  // 他のアイコンあれば
} from 'react-icons/fa'

function FollowMe() {
    // TOPボタンをクリックしたら画面を上にスクロール
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
    <section className="follow-section">
      <div className="title-bar">
        <h2 className="section-title">Follow Me</h2>
      </div>

      <div className="follow-grid">
        <div className="follow-item">
          <a
            href="https://soundcloud.com/xv_superuser"
            target="_blank"
            rel="noopener noreferrer"
            className="icon Soundcloud"
          >
            <FaSoundcloud size={24} />
          </a>
        </div>
        <div className="follow-item">
          <a
            href="https://www.mixcloud.com/xv_SuperUser/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon Mixcloud"
          >
            <FaMixcloud size={24} />
          </a>
        </div>
        <div className="follow-item">
          <a
            href="https://open.spotify.com/intl-ja/artist/3em2BrSNKNLiVftdFC3pEr"
            target="_blank"
            rel="noopener noreferrer"
            className="icon spotify"
          >
            <FaSpotify size={24} />
          </a>
        </div>
        <div className="follow-item">
          <a
            href="https://www.instagram.com/xinxanovich.superuser/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon instagram"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <div className="follow-item">
          <a
            href="https://www.facebook.com/SuperUser909/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon facebook"
          >
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
      <div className="btn-container">
        <button className="top-btn" onClick={scrollToTop}>
        TOP
        </button>
      </div>
    </section>
    </motion.div>
  )
}

export default FollowMe
