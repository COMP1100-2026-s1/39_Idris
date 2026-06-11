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
      const keyword = search.toLowerCase();
      const matchSearch =
        c.name.toLowerCase().includes(keyword) ||
        c.category.toLowerCase().includes(keyword) ||
        (c.description && c.description.toLowerCase().includes(keyword));
      const matchFilter = activeFilter === 'All' || c.category === activeFilter;
      return matchSearch && matchFilter;
    })
    .sort((a, b) => {
      if (sortOption === 'az') return a.name.localeCompare(b.name);
      if (sortOption === 'most') return b.memberCount - a.memberCount;
      if (sortOption === 'least') return a.memberCount - b.memberCount;
      return 0;
    });

  return (
    <div className="inner">
      <h1 className="page-title">Clubs.</h1>

      <div className="clubs-toolbar">
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
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

      <p>Showing {filtered.length} clubs</p>

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
