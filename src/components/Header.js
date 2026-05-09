import React from 'react';

const NAV_ITEMS = [
  { key: 'home', label: 'Home' },
  { key: 'clubs', label: 'Clubs' },
  { key: 'profile', label: 'Profile' },
];

export default function Header({ currentPage, onNavigate }) {
  return (
    <header className="site-header">
      <div className="header-inner">
        <div className="header-brand">
          <div className="header-logo">
            <svg viewBox="0 0 100 100" width="44" height="44" aria-label="UQ Logo">
              <circle cx="50" cy="50" r="50" fill="white" />
              <text
                x="50" y="62"
                textAnchor="middle"
                fontSize="38"
                fontWeight="bold"
                fill="#51247A"
                fontFamily="Georgia, serif"
              >
                UQ
              </text>
            </svg>
          </div>
          <div className="header-text">
            <span className="header-title">UQ CLUBS</span>
            <span className="header-subtitle">Find and join clubs in one place.</span>
          </div>
        </div>

        <nav className="header-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.key}
              className={`header-nav-link${currentPage === item.key ? ' active' : ''}`}
              onClick={() => onNavigate(item.key)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
