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
  z-index: 100;
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
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  text-align: left;
  a {
    color: ${({ theme }) => theme.colors.white.main};
    text-decoration: none;
    height: 100%;
    display: flex;
    column-gap: 10px;
    align-items: center;
    border-radius: 30px;
    padding: 0 10px;
    font-size: ${({ theme }) => theme.font.size.md};
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }

  a.active {
    background-color: ${({ theme }) => theme.colors.green};
  }

  svg {
    min-height: 30px;
  }

  @media screen and (max-width: 768px) {
    position: ${({ isOpen }) => (isOpen ? 'sticky' : 'absolute')};
    display: ${({ isOpen }) => (isOpen ? '' : 'none')};
  }
`;

export const LogoutSection = styled.div``;
