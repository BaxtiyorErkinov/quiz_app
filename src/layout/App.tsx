import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { IUser } from '@/models/IUser';

import Header from './Header';
import Sidebar from './Sidebar';
import { MainContent, MainSection, SidebarSection } from './AppComponents';

function App() {
  const [sidebarActive, setSidebarActive] = React.useState(true);
  const navigate = useNavigate();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}') as IUser;

    if (Object.entries(user).length) {
      return;
    }

    navigate('/signin');
  }, []);

  return (
    <>
      <Header />
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
