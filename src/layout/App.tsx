import React from 'react'
import { Outlet } from "react-router-dom"
import styled, { css } from 'styled-components';

import Header from './Header';
import Sidebar from './Sidebar'


const MainSection = styled.main`
  display: flex;
`
const SidebarSection = styled.nav`
  width: 20%;
`

const MainContent = styled.article`
  background: red;
  width: 100%;
`

function App() {
  return (
    <>
      <Header />
      <MainSection>
        <SidebarSection>
          <Sidebar />
        </SidebarSection>
        <MainContent>            
            <Outlet />
        </MainContent>
      </MainSection>
    </>
  )
}

export default App
