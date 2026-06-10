import React from 'react';

function ProfileInsight_YuejiaBai({ joinedClubData = [] }) {
  const totalJoined = joinedClubData.length;

  return (
    <section className="profile-insight-yuejia">
      <h2 className="section-heading">Club Preference Summary</h2>

      <div className="profile-insight-card-yuejia">
        {totalJoined === 0 ? (
          <>
            <p className="profile-insight-title-yuejia">
              You have not joined any clubs yet.
            </p >
            <p className="profile-insight-text-yuejia">
              Browse the club list and use the filters to find clubs that match
              your interests.
            </p >
          </>
        ) : (
          <>
            <p className="profile-insight-title-yuejia">
              You have joined {totalJoined} club{totalJoined === 1 ? '' : 's'}.
            </p >
            <p className="profile-insight-text-yuejia">
              Use your joined clubs to compare interests and decide what other
              clubs may fit your student life.
            </p >
          </>
        )}
      </div>
    </section>
  );
}

export default ProfileInsight_YuejiaBai;