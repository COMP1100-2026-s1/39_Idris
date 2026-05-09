import React, { useState } from 'react';
import ClubCard from './ClubCard';
import clubs from '../data/clubs';

const CATEGORIES = [
  { name: 'Sports', emoji: '⚽' },
  { name: 'Faculty', emoji: '🎓' },
  { name: 'Culture', emoji: '🌏' },
  { name: 'Others', emoji: '🎲' },
];

export default function HomePage({ joinedClubs, onViewMore, onNavigate }) {
  const [search, setSearch] = useState('');

  const filtered = clubs.filter((c) =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="inner">
      <h1 className="welcome-heading">Welcome Back.</h1>

      <div className="search-bar-wrap">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for clubs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="search-icon">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="#888">
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          </svg>
        </span>
      </div>

      <section>
        <h2 className="section-heading">Categories</h2>
        <div className="category-grid">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.name}
              className="category-card"
              onClick={() => onNavigate('clubs', cat.name)}
            >
              <span className="category-emoji">{cat.emoji}</span>
              <span className="category-label">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="section-heading">Recommended Clubs</h2>
        {filtered.length === 0 ? (
          <p className="no-results">No clubs match your search.</p>
        ) : (
          <div className="club-grid">
            {filtered.map((club) => (
              <ClubCard
                key={club.id}
                club={club}
                joinedClubs={joinedClubs}
                onViewMore={onViewMore}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
