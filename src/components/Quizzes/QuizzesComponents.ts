import { IQuizzes } from '@/models/IQuiz';
import styled from 'styled-components';

export const QuizzesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
  justify-content: center;
`;

export const QuizzesListItem = styled.li`
  flex: 0 0 30%;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.dark[400]};
  padding: 10px;
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  max-height: 120px;
  min-height: 100px;

  :hover {
    background-color: ${({ theme }) => theme.colors.dark[300]};
    transition: all 0.3s;
  }

  @media screen and (max-width: 640px) {
    flex: 0 0 100%;
  }
`;

export const QuizzesListItemLine = styled.div`
  width: 3px;
  border-radius: 5px;
  height: 100%;
  background-color: #03ca82;
`;

export const QuizzesListItemContent = styled.div`
  row-gap: 5px;
  width: 100%;
`;

export const QuizzesListItemTitle = styled.h3``;

export const QuizzesListItemDesc = styled.p`
  font-size: ${({ theme }) => theme.font.size.sm};
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  white-space: pre-wrap;
  margin-top: 5px;
`;

export const QuizzesListItemFavorite = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
  height: 25px;
  margin-top: 15px;

  svg {
    cursor: pointer;
    position: absolute;
    bottom: 10px;
  }

  svg.active {
    color: ${({ theme }) => theme.colors.green};
  }
`;
