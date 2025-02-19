import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      {/* 上部ヘッダー */}
      <header className="top-header">
        <nav>
          <ul>
            <li><Link to="/">Home</Link> {/* ホームのURLを "/" に設定 */}</li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* 下部ヘッダー */}
      <footer className="bottom-header">
        <nav>
          <ul>
              <li><Link to="/brewcast"><span className="pc-only">Brewcast Online</span> Radio</Link></li>
              <li><Link to="/collaboration">Collaboration</Link></li>
              <li><Link to="/unbound">Events</Link></li>
          </ul>
        </nav>
      </footer>
    </>
  )
}

export default Header

// import React from 'react'
// import { motion } from 'framer-motion'
// import { Link } from 'react-router-dom'

// function Header() {
//   return (
//     <>
//       {/* 上部ヘッダー */}
//       <header className="top-header">
//         <nav>
//           <ul>
//             <motion.li
//               whileHover={{ scale: 1.2, color: "#fff" }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//             <Link to="/">Home</Link> {/* ホームのURLを "/" に設定 */}
//             </motion.li>
//             <motion.li
//               whileHover={{ scale: 1.2, color: "#fff" }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Link to="/music">Music</Link>
//             </motion.li>
//             <motion.li
//               whileHover={{ scale: 1.2, color: "#fff" }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Link to="/contact">Contact</Link>
//             </motion.li>
//           </ul>
//         </nav>
//       </header>

//       {/* 下部ヘッダー */}
//       <footer className="bottom-header">
//         <nav>
//           <ul>
//             <motion.li
//               whileHover={{ scale: 1.2, color: "#fff" }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Link to="/brewcast"><span className="pc-only">Brewcast Online</span> Radio</Link>
//             </motion.li>
//             <motion.li
//               whileHover={{ scale: 1.2, color: "#fff" }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Link to="/collaboration">Collaboration</Link>
//             </motion.li>
//             <motion.li
//               whileHover={{ scale: 1.2, color: "#fff" }}
//               whileTap={{ scale: 0.9 }}
//               transition={{ type: "spring", stiffness: 200 }}
//             >
//               <Link to="/unbound">Events</Link>
//             </motion.li>
//           </ul>
//         </nav>
//       </footer>
//     </>
//   )
// }

// export default Header
