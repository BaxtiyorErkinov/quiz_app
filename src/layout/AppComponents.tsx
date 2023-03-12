import styled from 'styled-components';

type SidebarProps = {
  isOpen: boolean;
};

export const MainSection = styled.main`
  display: flex;
`;
export const SidebarSection = styled.nav<SidebarProps>`
  width: 20%;
  position: relative;
  transition: all 0.4s;

  @media screen and (max-width: 768px) {
    position: absolute;
    width: ${({ isOpen }) => (isOpen ? '40%' : '0%')};
    transition: all 0.3s;
  }
`;

export const MainContent = styled.article`
  background: ${({ theme }) => theme.colors.dark[500]};
  width: 100%;
`;
