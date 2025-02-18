import React from 'react';
import { motion } from 'framer-motion'

function Collaboration() {
  return (
    <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
    >
    <div className="kanakitty-container">
      <h1 className="kanakitty-title">Kana Kitty × SuperUser</h1>

      {/* YouTube 動画エリア */}
      <div className="video-section">
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/zoXUAQSORsQ"
            title="SuperUser + Kana Kitty @ Re:birth Festival"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="video-caption">SuperUser + Kana Kitty @ Re:birth Festival</p>
        </div>

        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/FXMTxwxbt9g"
            title="SuperUser + Kana Kitty @ UNBOUND"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <p className="video-caption">SuperUser + Kana Kitty @ UNBOUND</p>
        </div>
      </div>

      {/* 説明テキスト */}
      <div className="description">
        <p>
        At the crossroads of sound and movement, SuperUser and Kana Kitty craft performances that are both immersive and unpredictable. SuperUser shapes the sonic environment—drawing from deep, pulsing techno to atmospheric soundscapes—while Kana embodies the music through the raw, transformative language of Butoh. Their collaboration has graced stages from Tokyo’s legendary Womb to the open-air energy of Re:Birth Festival, as well as a spectrum of private and public dance and theatre events.  <br/><br/>
        What makes their partnership so compelling is its versatility. Whether in the charged intimacy of a club, the vastness of a festival stage, or an unconventional art space, their interplay adapts seamlessly to the setting. SuperUser’s meticulously curated soundscapes create a space where time stretches and contracts, inviting the audience into a trance-like state, while Kana’s Butoh—a dance form that exists at the threshold of presence and absence—embodies and amplifies that energy.  <br/><br/>
        Together, they create more than a performance; they sculpt a fleeting world that dissolves the boundary between music and movement, past and present, human and elemental. Each show is an exploration—never the same, always evolving.
        </p>
      </div>
    </div>
    </motion.div>
  );
}

export default Collaboration;
