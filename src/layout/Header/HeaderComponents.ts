import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background-color: ${({ theme }) => theme.colors.dark[400]};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.size.lg};
  text-shadow: 2px 7px 5px rgba(0, 0, 0, 0.3),
    0px -4px 10px rgba(255, 255, 255, 0.3);
`;

export const HeaderUserSection = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  cursor: pointer;
`;

export const UserAvatar = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const UserName = styled.span`
  font-size: ${({ theme }) => theme.font.size.bs};
  font-weight: ${({ theme }) => theme.font.weight.bold};
`;

export const HeaderToggle = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
`;

export const Toggle = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white.main};
  display: none;

  svg {
    path {
      fill: ${({ theme }) => theme.colors.white.main};
      stroke: ${({ theme }) => theme.colors.white.main};
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
