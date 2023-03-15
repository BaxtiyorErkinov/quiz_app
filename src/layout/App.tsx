import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { IUser, IUserResponse } from '@/models/IUser';

import Header from './Header';
import Sidebar from './Sidebar';
import { MainContent, MainSection, SidebarSection } from './AppComponents';
import { getUser } from '@/utils/getUser';

function App() {
  const [sidebarActive, setSidebarActive] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const user = getUser();

    if (Object.entries(user).length) {
      return;
    }

    navigate('/signin');
  }, []);

  const resizeEvent = (e: Event) => {
    const target = e.target as Window;
    if (target.innerWidth <= 640) {
      setSidebarActive(false);
      return;
    }
  };

  React.useEffect(() => {
    window.addEventListener('resize', resizeEvent);

    return () => window.removeEventListener('resize', resizeEvent);
  }, []);

  return (
    <>
      <Header isOpen={sidebarActive} setIsOpen={setSidebarActive} />
      <MainSection>
        <SidebarSection isOpen={sidebarActive}>
          <Sidebar isOpen={sidebarActive} setIsOpen={setSidebarActive} />
        </SidebarSection>
        <MainContent>
          <Outlet />
        </MainContent>
      </MainSection>
    </>
  );
}

export default App;
