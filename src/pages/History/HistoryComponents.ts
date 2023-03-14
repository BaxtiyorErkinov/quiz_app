import styled from 'styled-components';

export const HistoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HistoryItem = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.dark['400']};
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding: 10px 10px 5px 10px;
`;

export const UserSection = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 10px;
`;

export const UserAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background: ${({ theme }) => theme.colors.green};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.font.size.lg};
`;

export const Date = styled.p`
  width: 100%;
  text-align: right;
  margin-right: 10px;
  font-weight: ${({ theme }) => theme.font.weight.medium};
  font-style: italic;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-style: italic;
  column-gap: 5px;
`;

export const UserName = styled.h2``;

export const UserEmail = styled.p``;

export const UserResults = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ResultScore = styled.h2`
  font-size: ${({ theme }) => theme.font.size.lg};
`;

export const ResultInfo = styled.span`
  font-size: ${({ theme }) => theme.font.size.sm};
`;

export const Line = styled.div`
  width: 2px;
  height: 30px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.green};

  :last-of-type {
    display: none;
  }
`;
