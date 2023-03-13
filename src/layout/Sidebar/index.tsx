import axios from '@/lib/axios/auth';
import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

import { getUser } from '@/utils/getUser';

import Button from '@/components/Button';
import {
  LogoutSection,
  SidebarContainer,
  SidebarRoutes,
  SidebarRoutesItem,
} from './SidebarComponents';

import { BiLogOutCircle } from 'react-icons/bi';

const routes = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Favorites',
    url: '/favorite',
  },
];

interface ISiderbarProps {
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const Sidebar: React.FC<ISiderbarProps> = ({ isOpen, setIsOpen }) => {
  const navigate = useNavigate();
  const { RefreshToken: Token } = getUser();

  const handleLogout = async () => {
    try {
      const res = await axios.post(`/api/Auth/logout?refreshToken=${Token}`);
      if (res.status === 204) {
        localStorage.removeItem('user');
        navigate('/signin');
      }
    } catch (err) {
      const errorMess = err as AxiosError;
      alert(errorMess.response?.data);
    }
  };

  return (
    <>
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
