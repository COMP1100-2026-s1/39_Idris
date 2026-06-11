import React, { useState, useEffect } from 'react';
import ClubCard from './ClubCard';
import clubs from '../data/clubs';

const FILTERS = ['All', 'Sports', 'Faculty', 'Culture', 'Others'];

export default function ClubsPage({ joinedClubs, onViewMore, initialFilter }) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState(initialFilter || 'All');
  const [sortOption, setSortOption] = useState('default');

  useEffect(() => {
    if (initialFilter) setActiveFilter(initialFilter);
  }, [initialFilter]);

const filtered = clubs
  .filter((c) => {
    const matchSearch = c.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchFilter =
      activeFilter === 'All' || c.category === activeFilter;

    return matchSearch && matchFilter;
  })
  .sort((a, b) => {
    if (sortOption === 'az') {
      return a.name.localeCompare(b.name);
    }

    if (sortOption === 'most') {
      return b.memberCount - a.memberCount;
    }

    if (sortOption === 'least') {
      return a.memberCount - b.memberCount;
    }

    return 0;
  });

  return (
    <div className="inner">
      <h1 className="page-title">Clubs.</h1>

      <div className="clubs-toolbar">
    <select
  value={sortOption}
  onChange={(e) => setSortOption(e.target.value)}
>
  <option value="default">Default</option>
  <option value="az">A-Z</option>
  <option value="most">Most Members</option>
  <option value="least">Least Members</option>
</select>
        <div className="search-bar-wrap search-bar-wrap--inline">
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

        <div className="filter-row">
          {FILTERS.map((f) => (
            <button
              key={f}
              className={`filter-btn${activeFilter === f ? ' active' : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

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
    </div>
  );
}
