import { FaHome, FaHistory } from 'react-icons/fa';
import { MdOutlineLeaderboard } from 'react-icons/md';
import { BsBookmarkFill } from 'react-icons/bs';

export const routes = [
  {
    title: 'Home',
    url: '/',
    icon: <FaHome />,
  },
  {
    title: 'Favorites',
    url: '/favorite',
    icon: <FaHistory />,
  },
  {
    title: 'History',
    url: '/history',
    icon: <BsBookmarkFill />,
  },
  {
    title: 'Leaderboard',
    url: '/leaderboard',
    icon: <MdOutlineLeaderboard />,
  },
];
