import React, { useEffect } from 'react';
import ClubLogo from './ClubLogo';

/* Per-category accent colours (hero banner + badge tint) */
const CATEGORY_ACCENT = {
  Sports:  '#E8A723',
  Faculty: '#51247A',
  Culture: '#C2185B',
  Others:  '#1565C0',
};

/* ── Tiny inline SVG icons ───────────────────────────── */
const IconPin = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const IconPeople = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);

const IconInstagram = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);

const IconFacebook = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const IconDiscord = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
  </svg>
);

const SOCIAL_CONFIG = {
  instagram: { icon: <IconInstagram />, label: 'Instagram', color: '#E1306C' },
  facebook:  { icon: <IconFacebook />,  label: 'Facebook',  color: '#1877F2' },
  discord:   { icon: <IconDiscord />,   label: 'Discord',   color: '#5865F2' },
};

/* ── Main component ───────────────────────────────────── */
export default function ClubModal({ club, joinedClubs, onJoin, onClose }) {
  if (!club) return null;
  const isJoined = joinedClubs.includes(club.id);
  const accent = CATEGORY_ACCENT[club.category] || '#51247A';

  /* Close on Escape */
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  /* Lock body scroll */
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>

        {/* ── Hero banner ───────────────────────────── */}
        <div className="modal-hero" style={{ background: accent }}>
          <div className="modal-hero-logo">
            <ClubLogo club={club} size={80} />
          </div>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">
            &#x2715;
          </button>
        </div>

        {/* ── Scrollable body ───────────────────────── */}
        <div className="modal-scroll">
          <div className="modal-content">

            {/* Title + meta */}
            <div className="modal-title-row">
              <h2 className="modal-club-name">{club.name}</h2>
              <div className="modal-title-meta">
                <span
                  className="modal-category-badge"
                  style={{ background: accent + '22', color: accent }}
                >
                  {club.category}
                </span>
                <span className="modal-member-pill">
                  <IconPeople />
                  {club.memberCount.toLocaleString()} members
                </span>
              </div>
            </div>

            {/* About */}
            <section className="modal-section">
              <h3 className="modal-section-title">About</h3>
              <p className="modal-description">
                {club.introduction || club.description}
              </p>
            </section>

            {/* Weekly activities */}
            {club.activities && club.activities.length > 0 && (
              <section className="modal-section">
                <h3 className="modal-section-title">Weekly Activities</h3>
                <ul className="modal-activities">
                  {club.activities.map((activity, i) => (
                    <li key={i} className="modal-activity-item">
                      <span
                        className="modal-activity-dot"
                        style={{ background: accent }}
                      />
                      {activity}
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Meeting info */}
            {(club.meetingLocation || club.contactEmail) && (
              <section className="modal-section">
                <h3 className="modal-section-title">Meeting Info</h3>
                <div className="modal-info-list">
                  {club.meetingLocation && (
                    <div className="modal-info-row">
                      <span className="modal-info-icon" style={{ color: accent }}>
                        <IconPin />
                      </span>
                      <span className="modal-info-text">{club.meetingLocation}</span>
                    </div>
                  )}
                  {club.contactEmail && (
                    <div className="modal-info-row">
                      <span className="modal-info-icon" style={{ color: accent }}>
                        <IconMail />
                      </span>
                      <a
                        href={`mailto:${club.contactEmail}`}
                        className="modal-info-link"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {club.contactEmail}
                      </a>
                    </div>
                  )}
                </div>
              </section>
            )}

            {/* Social media */}
            {club.socialMedia && Object.keys(club.socialMedia).length > 0 && (
              <section className="modal-section">
                <h3 className="modal-section-title">Follow Us</h3>
                <div className="modal-social-row">
                  {Object.entries(club.socialMedia).map(([platform, handle]) => {
                    const cfg = SOCIAL_CONFIG[platform];
                    if (!cfg) return null;
                    return (
                      <span
                        key={platform}
                        className="social-chip"
                        style={{ background: cfg.color + '18', color: cfg.color, borderColor: cfg.color + '40' }}
                      >
                        {cfg.icon}
                        {handle}
                      </span>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Join / Joined button */}
            <button
              className={`join-btn${isJoined ? ' joined' : ''}`}
              style={!isJoined ? { background: accent } : {}}
              onClick={() => onJoin(club.id)}
            >
              {isJoined ? '✓  Already Joined' : 'Join Club'}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}
