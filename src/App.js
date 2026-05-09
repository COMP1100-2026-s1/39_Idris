import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import BottomNav from './components/BottomNav';
import HomePage from './components/HomePage';
import ClubsPage from './components/ClubsPage';
import ProfilePage from './components/ProfilePage';
import ClubModal from './components/ClubModal';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [joinedClubs, setJoinedClubs] = useState([]);
  const [modalClub, setModalClub] = useState(null);
  const [clubsFilter, setClubsFilter] = useState('All');

  const handleNavigate = (page, filter) => {
    setCurrentPage(page);
    if (filter) setClubsFilter(filter);
  };

  const handleViewMore = (club) => setModalClub(club);

  const handleJoin = (clubId) => {
    setJoinedClubs((prev) =>
      prev.includes(clubId) ? prev.filter((id) => id !== clubId) : [...prev, clubId]
    );
  };

  return (
    <div className="app-shell">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      <main className="page-wrapper">
        {currentPage === 'home' && (
          <HomePage
            joinedClubs={joinedClubs}
            onViewMore={handleViewMore}
            onNavigate={handleNavigate}
          />
        )}
        {currentPage === 'clubs' && (
          <ClubsPage
            joinedClubs={joinedClubs}
            onViewMore={handleViewMore}
            initialFilter={clubsFilter}
          />
        )}
        {currentPage === 'profile' && (
          <ProfilePage
            joinedClubs={joinedClubs}
            onViewMore={handleViewMore}
          />
        )}
      </main>

      <BottomNav currentPage={currentPage} onNavigate={handleNavigate} />

      {modalClub && (
        <ClubModal
          club={modalClub}
          joinedClubs={joinedClubs}
          onJoin={handleJoin}
          onClose={() => setModalClub(null)}
        />
      )}
    </div>
  );
}
