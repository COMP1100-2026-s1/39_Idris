import React from 'react';
import ClubLogo from './ClubLogo';

export default function ClubCard({ club, joinedClubs, onViewMore }) {
  const isJoined = joinedClubs.includes(club.id);

  return (
    <div className="club-card">
      <div className="club-card-top">
        <ClubLogo club={club} size={52} />
        {isJoined && <span className="joined-badge">Joined</span>}
      </div>
      <div className="club-card-info">
        <div className="club-card-name">{club.name}</div>
        <div className="club-card-meta">
          <span className="club-card-category">{club.category}</span>
          <span className="club-card-dot">·</span>
          <span className="club-card-members">{club.memberCount} members</span>
        </div>
      </div>
      <button className="view-more-btn" onClick={() => onViewMore(club)}>
        View More
      </button>
    </div>
  );
}
