import styled from 'styled-components';

type SidebarProps = {
  isOpen: boolean;
};

export const SidebarContainer = styled.aside`
  width: 100%;
  height: calc(100vh - 50px);
  background-color: ${({ theme }) => theme.colors.dark[400]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 20px 0;
  position: relative;
  overflow: hidden;
`;

export const SidebarRoutes = styled.ul`
  width: 100%;
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
`;

export const SidebarRoutesItem = styled.li<SidebarProps>`
  width: 100%;
  list-style: none;
  height: 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  a {
    color: ${({ theme }) => theme.colors.white.main};
    text-decoration: none;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    font-size: ${({ theme }) => theme.font.size.md};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  a.active {
    background-color: #2dc653;
  }

  @media screen and (max-width: 768px) {
    position: ${({ isOpen }) => (isOpen ? 'sticky' : 'absolute')};
    display: ${({ isOpen }) => (isOpen ? '' : 'none')};
  }
`;

export const LogoutSection = styled.div``;

export const SidebarToggle = styled.button`
  position: absolute;
  top: 20%;
  right: -40px;
  width: 40px;
  height: 60px;
  background: ${({ theme }) => theme.colors.dark[400]};
  border: 2px solid #2dc653;
  border-left: none;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: #2dc653;
  transition: all 0.3s;
  z-index: 10;

  svg {
    pointer-events: none;
  }

  :active {
    background: #2dc653;
    color: ${({ theme }) => theme.colors.white.main};
    border: 2px solid ${({ theme }) => theme.colors.white.main};
    border-left: none;
  }

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
