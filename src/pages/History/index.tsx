import Button from '@/components/Button';
import Notfound from '@/components/Notfound';
import { getFormattedDate } from '@/utils/getFormattedDate';
import { getUser } from '@/utils/getUser';
import React from 'react';
import {
  Date,
  HistoryContainer,
  HistoryItem,
  Line,
  ResultInfo,
  ResultItem,
  ResultScore,
  UserAvatar,
  UserEmail,
  UserInfo,
  UserName,
  UserResults,
  UserSection,
} from './HistoryComponents';

type SavedResultsType = {
  id: number;
  total: number;
  correctAnswers: number;
  date: string;
  points: number;
};

const History = () => {
  const [counter, setCounter] = React.useState(0);
  const history = JSON.parse(
    localStorage.getItem('savedResults') || '[]',
  ) as SavedResultsType[];
  const { FullName, Email } = getUser();

  const handleRemove = (quizId: number) => {
    setCounter((prev) => prev + 1);
    const found = history.findIndex((h) => h.id === quizId);
    if (found > -1) {
      history.splice(found, 1);
      localStorage.setItem('savedResults', JSON.stringify(history));
      return;
    }
    return;
  };

  return (
    <HistoryContainer>
      {history.length > 0 ? (
        history.map((h) => (
          <HistoryItem key={h.id}>
            <UserSection>
              <UserInfo>
                <UserName>{FullName}</UserName>
                <UserEmail>unknown@gmail.com</UserEmail>
              </UserInfo>
              <UserAvatar>{FullName.slice(0, 1)}</UserAvatar>
            </UserSection>
            <Date>{getFormattedDate(h.date)}</Date>
            <UserResults>
              <ResultItem>
                <ResultScore>{h.total}</ResultScore>
                <ResultInfo>total</ResultInfo>
              </ResultItem>
              <Line />
              <ResultItem>
                <ResultScore>{h.correctAnswers}</ResultScore>
                <ResultInfo>correct</ResultInfo>
              </ResultItem>
              <Line />
              <ResultItem>
                <ResultScore>{h.points}</ResultScore>
                <ResultInfo>points</ResultInfo>
              </ResultItem>
              <Line />
            </UserResults>
            <Button bgColor={'red'} onClick={() => handleRemove(h.id)}>
              Remove
            </Button>
          </HistoryItem>
        ))
      ) : (
        <Notfound message="History not found" />
      )}
    </HistoryContainer>
  );
};

export default History;
