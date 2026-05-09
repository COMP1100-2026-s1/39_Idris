import React from 'react';

const CATEGORY_COLORS = {
  Sports: '#E8A723',
  Faculty: '#51247A',
  Culture: '#C2185B',
  Others: '#1565C0',
};

const CATEGORY_INITIALS = {
  Sports: 'SP',
  Faculty: 'FA',
  Culture: 'CU',
  Others: 'OT',
};

export default function ClubLogo({ club, size = 48 }) {
  const bg = CATEGORY_COLORS[club.category] || '#888';
  const initials = club.name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('');

  return (
    <div
      className="club-logo-placeholder"
      style={{
        width: size,
        height: size,
        minWidth: size,
        background: bg,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: size * 0.3,
        letterSpacing: 1,
      }}
    >
      {initials}
    </div>
  );
}
