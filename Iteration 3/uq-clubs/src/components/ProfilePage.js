import React, { useState } from 'react';
import ClubCard from './ClubCard';
import clubs from '../data/clubs';
import { friendActivities, suggestedFriends } from '../data/friendActivities';

export default function ProfilePage({ joinedClubs = [], onViewMore = () => {} }) {
  const safeJoinedClubs = Array.isArray(joinedClubs) ? joinedClubs : [];
  const safeFriendActivities = Array.isArray(friendActivities) ? friendActivities : [];
  const safeSuggestedFriends = Array.isArray(suggestedFriends) ? suggestedFriends : [];

  const joinedClubData = clubs.filter((club) => safeJoinedClubs.includes(club.id));

  const [followedFriends, setFollowedFriends] = useState(['jack']);

  const toggleFriend = (friendId) => {
    setFollowedFriends((prev) =>
      prev.includes(friendId)
        ? prev.filter((id) => id !== friendId)
        : [...prev, friendId]
    );
  };

  const getClubById = (clubId) => clubs.find((club) => club.id === clubId);

  return (
    <div className="inner">
      <h1 className="page-title">Profile.</h1>

      <div className="profile-layout">
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
                <span className="profile-value">{safeJoinedClubs.length}</span>
              </div>
            </div>
          </div>

          <section>
            <h2 className="section-heading">Notifications</h2>
            <div className="empty-box">NO NOTIFICATIONS</div>
          </section>

          <section className="social-proof-summary">
            <h2 className="section-heading">Social Proof</h2>

            <div className="summary-card">
              <div className="summary-number">{followedFriends.length}</div>

              <div>
                <div className="summary-title">Friends followed</div>
                <p className="summary-text">
                  Friend activity helps students judge which clubs feel trustworthy,
                  active, and worth exploring.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="profile-clubs-col">
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
                    joinedClubs={safeJoinedClubs}
                    onViewMore={onViewMore}
                  />
                ))}
              </div>
            )}
          </section>

          <section className="friends-section">
            <h2 className="section-heading">Friends Activity</h2>

            <div className="friend-activity-list">
              {safeFriendActivities.map((activity) => {
                const club = getClubById(activity.clubId);

                if (!club) {
                  return null;
                }

                return (
                  <article key={activity.id} className="friend-activity-card">
                    <div className="friend-activity-top">
                      <div className="friend-avatar-small">
                        {activity.friendName.charAt(0)}
                      </div>

                      <div>
                        <p className="friend-activity-title">
                          <strong>{activity.friendName}</strong> {activity.action}{' '}
                          <strong>{club.name}</strong>
                        </p>

                        <p className="friend-activity-meta">
                          {activity.signal} · {activity.time}
                        </p>
                      </div>
                    </div>

                    <p className="friend-quote">“{activity.quote}”</p>

                    <button
                      className="view-more-btn"
                      type="button"
                      onClick={() => onViewMore(club)}
                    >
                      View Club
                    </button>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="friends-section">
            <h2 className="section-heading">Suggested Friends</h2>

            <div className="suggested-friend-list">
              {safeSuggestedFriends.map((friend) => {
                const club = getClubById(friend.clubId);
                const isFollowing = followedFriends.includes(friend.id);

                return (
                  <article key={friend.id} className="suggested-friend-card">
                    <div className="friend-avatar-large">
                      {friend.name.charAt(0)}
                    </div>

                    <div className="suggested-friend-info">
                      <h3>{friend.name}</h3>
                      <p className="suggested-course">{friend.course}</p>
                      <p className="suggested-interest">{friend.sharedInterest}</p>

                      {club && (
                        <button
                          className="text-link-btn"
                          type="button"
                          onClick={() => onViewMore(club)}
                        >
                          See related club
                        </button>
                      )}
                    </div>

                    <button
                      className={`friend-toggle-btn${isFollowing ? ' following' : ''}`}
                      type="button"
                      onClick={() => toggleFriend(friend.id)}
                    >
                      {isFollowing ? 'Following' : 'Add Friend'}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}