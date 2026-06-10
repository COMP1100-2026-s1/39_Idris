import React from 'react';
import ClubCard from './ClubCard';
import clubs from '../data/clubs';
import ProfileInsight_YuejiaBai from './ProfileInsight_YuejiaBai';

export default function ProfilePage({ joinedClubs, onViewMore }) {
  const joinedClubData = clubs.filter((c) => joinedClubs.includes(c.id));

  return (
    <div className="inner">
      <h1 className="page-title">Profile.</h1>

      <div className="profile-layout">
        {/* Left / top column */}
        <div className="profile-main-col">
          <div className="profile-card">
            <div className="profile-avatar">
              <svg viewBox="0 0 64 64" width="72" height="72">
                <circle cx="32" cy="32" r="32" fill="#51247A" />
                <circle cx="32" cy="24" r="12" fill="#E8A723" />
                <ellipse cx="32" cy="52" rx="20" ry="14" fill="#E8A723" />
              </svg>
            </div>
            <div className="profile-info">
              <div className="profile-row">
                <span className="profile-label">Name</span>
                <span className="profile-value">ANNORAK AHROM</span>
              </div>
              <div className="profile-divider" />
              <div className="profile-row">
                <span className="profile-label">UQ E-Mail</span>
                <span className="profile-value profile-email">s5020576@uq.edu.au</span>
              </div>
              <div className="profile-divider" />
              <div className="profile-row">
                <span className="profile-label">Clubs Joined</span>
                <span className="profile-value">{joinedClubs.length}</span>
              </div>
            </div>
          </div>

          <section>
            <h2 className="section-heading">Notifications</h2>
            <div className="empty-box">NO NOTIFICATIONS</div>
          </section>
                    
        </div>

        {/* Right / bottom column */}
        <div className="profile-clubs-col">
       <ProfileInsight_YuejiaBai joinedClubData={joinedClubData} />
          <section>
            <h2 className="section-heading">Joined Clubs</h2>
            {joinedClubData.length === 0 ? (
              <div className="empty-box">You haven't joined any clubs yet.</div>
            ) : (
              <div className="club-grid">
                {joinedClubData.map((club) => (
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
      </div>
    </div>
  );
}
