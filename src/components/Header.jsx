import React from 'react';

function Header() {
  return (
    <>
      {/* 上部ヘッダー */}
      <header className="top-header">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/music">Music</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* 下部ヘッダー */}
      <footer className="bottom-header">
        <nav>
          <ul>
            <li className="pc-only"><a href="/brewcast">Brewcast Online Radio</a></li>
            <li className="sm-only"><a href="/brewcast">Radio</a></li>
            <li><a href="/collaboration">Collaboration</a></li>
            <li><a href="/events">Events</a></li>
          </ul>
        </nav>
      </footer>
    </>
  );
}

export default Header;
