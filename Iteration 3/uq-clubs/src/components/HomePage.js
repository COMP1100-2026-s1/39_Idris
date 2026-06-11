import React, { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500); // 模拟loading
  }, []);

  if (loading) return <div>Loading clubs...</div>;

  const filtered = clubs.filter((c) => {
    const keyword = search.toLowerCase();
    return (
      c.name.toLowerCase().includes(keyword) ||
      c.category.toLowerCase().includes(keyword) ||
      (c.description && c.description.toLowerCase().includes(keyword))
    );
  });

  // 推荐：按成员数排序前4
  const recommended = clubs
    .sort((a, b) => b.memberCount - a.memberCount)
    .slice(0, 4);

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
          {/* 搜索图标SVG */}
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
        {recommended.length === 0 ? (
          <p className="no-results">No clubs match your search.</p>
        ) : (
          <div className="club-grid">
            {recommended.map((club) => (
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
    </div>
  );
}
