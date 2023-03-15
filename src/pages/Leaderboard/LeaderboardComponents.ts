import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.dark[500]};

  @media screen and (max-width: 640px) {
    flex-direction: column;
    row-gap: 10px;
  }
`;

export const HeaderTitle = styled.h1``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
