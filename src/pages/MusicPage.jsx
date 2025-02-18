import React, { useState } from 'react';
import { motion } from 'framer-motion'


function MusicPage() {
  const musicItems = [
    {
      image: '/src/assets/image/album1.png',
      type: 'Release',
      name: 'Emergent Phenomena',
      genre: 'Techno',
      url: 'https://soundcloud.com/sweetmusicofc/premiere-superuser-emergent-phenomena-plus-future-records'
    },
    {
      image: '/src/assets/image/album2.png',
      type: 'Mix',
      name: 'Deep/Tech House Live Mix for OutPut',
      genre: 'House',
      url: 'https://soundcloud.com/xv_superuser/deeptech-house-live-mix-for-output-sankeys-penthouse'
    },
    {
      image: '/src/assets/image/album3.png',
      type: 'Release',
      name: 'Enter The Vortal',
      genre: 'Ambient',
      url: 'https://www.mixcloud.com/xv_SuperUser/enter-the-vortal/'
    },
    {
      image: '/src/assets/image/album4.png',
      type: 'Mix',
      name: 'Tech House and Groovy Basslines live',
      genre: 'House',
      url: 'https://www.mixcloud.com/xv_SuperUser/sleazy-tech-house-and-groovy-basslines-live-sidebyside-oath-tokyo-202007/'
    },
    {
      image: '/src/assets/image/album5.png',
      type: 'Mix',
      name: "Xanadu's Pleasuredome",
      genre: 'Techno',
      url: 'https://www.mixcloud.com/xv_SuperUser/xanadus-pleasuredome/'
    },
    {
      image: '/src/assets/image/album6.png',
      type: 'Mix',
      name: 'Shredding the Astral Plane',
      genre: 'Ambient',
      url: 'https://www.mixcloud.com/xv_SuperUser/drifting-the-astral-plane/'
    },
  ]

  // ジャンル選択の状態を管理
  const [selectedGenre, setSelectedGenre] = useState('All')

  // ドロップダウン変更時に呼ばれる関数
  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value)
  }

  // TOPボタンをクリックしたら画面を上にスクロール
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // 選択されたジャンルでフィルタリング
  const filteredMusic = musicItems.filter(item =>
    selectedGenre === 'All' || item.genre === selectedGenre
  )

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
    <div className="music-container">
      <div className="title-bar">
        <h2 className="section-title">Latest releases</h2>
      </div>
      <div className="genre-selector">
        <select value={selectedGenre} onChange={handleGenreChange}>
          <option value="All">All Genres</option>
          <option value="Techno">Techno</option>
          <option value="House">House</option>
          <option value="Ambient">Ambient</option>
        </select>
      </div>

      <div className="music-grid">
        {filteredMusic.map((item, index) => (
          <div className="music-item" key={index}>
            <a href={item.url} target="_blank" rel="noopener noreferrer">
              <img src={item.image} alt={item.name} />
              <p className="music-type">{item.type}</p>
              <p className="music-name">{item.name}</p>
            </a>
          </div>
        ))}
      </div>

      <div className="about-superuser">
        <div className="title-bar">
          <h2 className="section-title">SuperUser</h2>
        </div>
        <div className="superuser-content">
          <img src="/src/assets/image/superuser.png" alt="SuperUser" />
          <p>
          SuperUser is a name that needs no introduction in the world of techno and house music. Boasting over a decade and a half of deep immersion in the techno music realm, he has emerged as not just a DJ or producer, but as a veritable maestro of the soundscapes. His origins in the UK and his formative years in Tokyo's kinetic music scene have shaped an artist who masterfully bridges the gap between divergent sounds. Placing him at the forefront of DJ innovation. <br /><br />
          SuperUser's sets are not mere mixes; they are narratives. Narratives that span the gritty undertones of Detroit, the soulful rhythms of Africa, the experimental edge of Europe, and the avant-garde vibrations of Japan. Whether grounding his audience in the foundational 4/4 beat or venturing into the uncharted territories of broken basslines and kaleidoscopic percussion, his performances are a testament to his relentless pursuit of musical excellence.<br /><br />
          Tokyo's vibrant club scene and the UK's rich musical heritage have borne witness to SuperUser's evolution. Regular performances and events at legendary venues like Womb, Vent, and Ageha placed him center stage in the Tokyo scene, while festivals like Re:Birth, Brightness, and Harmony established him as core member of the Japanese electronic underground. As the visionary behind LiQUiD music festival and pioneering techno and house events like Unbound, SBS and UK-based Rundfunk, SuperUser's influence in the industry is undeniable.<br /><br />
          More than just a DJ, SuperUser is an architect of experiences. His musical tales are intricate, his style unparalleled, and his vision, ever-evolving. As he embarks on the journey with his debut release 'Emergent Phenomena', the big question is what else has he got in store.

          </p>
        </div>
      </div>


      <div className="epk-section">
        <h2>Press Kit</h2>
        <a
          href="https://drive.google.com/drive/u/0/folders/1Lrdwp9Q9ZHUUkwoR57XgQhr2hsL-ze-q"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="download-btn">Download ⬇</div>
        </a>
      </div>
    </div>

    </motion.div>
  )
}

export default MusicPage
