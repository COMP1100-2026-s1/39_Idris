export const suggestedFriends = [
  {
    id: 'emily',
    name: 'Emily Chen',
    course: 'First-year IT student',
    sharedInterest: 'Technology and beginner-friendly clubs',
    clubId: 3,
  },
  {
    id: 'jack',
    name: 'Jack Wilson',
    course: 'Second-year Engineering student',
    sharedInterest: 'Engineering, networking and industry events',
    clubId: 6,
  },
  {
    id: 'sarah',
    name: 'Sarah Nguyen',
    course: 'Third-year Business student',
    sharedInterest: 'Business, career events and low-commitment activities',
    clubId: 10,
  },
];

export const friendActivities = [
  {
    id: 1,
    friendId: 'emily',
    friendName: 'Emily',
    action: 'joined',
    clubId: 3,
    signal: 'Beginner friendly',
    time: '2 days ago',
    quote:
      'The weekly coding night made it easier to meet people because beginners were welcomed.',
  },
  {
    id: 2,
    friendId: 'jack',
    friendName: 'Jack',
    action: 'recommends',
    clubId: 6,
    signal: 'Useful industry events',
    time: 'Last week',
    quote:
      'Good option if you want practical engineering events instead of only social activities.',
  },
  {
    id: 3,
    friendId: 'sarah',
    friendName: 'Sarah',
    action: 'is interested in',
    clubId: 10,
    signal: 'Worth comparing',
    time: 'Yesterday',
    quote:
      'I would check this club because the events look relevant, but I still want to compare time commitment.',
  },
];