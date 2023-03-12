import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import {
  LogoutSection,
  SidebarContainer,
  SidebarRoutes,
  SidebarRoutesItem,
  SidebarToggle,
} from './SidebarComponents';

import { BiLogOutCircle } from 'react-icons/bi';
import {
  TbSquareRoundedArrowLeft,
  TbSquareRoundedArrowRight,
} from 'react-icons/tb';

const routes = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Leaderboard',
    url: '/asd',
  },
];

interface ISiderbarProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const Sidebar: React.FC<ISiderbarProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/signin');
  };

  return (
    <>
      <SidebarToggle onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <TbSquareRoundedArrowLeft /> : <TbSquareRoundedArrowRight />}
      </SidebarToggle>
      <SidebarContainer>
        <SidebarRoutes>
          {routes.map((route) => (
            <React.Fragment key={route.url}>
              <SidebarRoutesItem isOpen={isOpen}>
                <NavLink
                  to={route.url}
                  className={({ isActive }) => (isActive ? 'active' : '')}>
                  {route.title}
                </NavLink>
              </SidebarRoutesItem>
            </React.Fragment>
          ))}
        </SidebarRoutes>
        <LogoutSection>
          <Button icon={<BiLogOutCircle />} onClick={handleLogout}>
            Logout
          </Button>
        </LogoutSection>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
