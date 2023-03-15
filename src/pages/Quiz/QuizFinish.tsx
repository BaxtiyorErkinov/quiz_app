import Button from '@/components/Button';
import { getCorrectAnswers } from '@/utils/getCorrectAnswers';
import { getUser } from '@/utils/getUser';
import { useAppSelector } from '@/utils/hooks/redux';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import {
  Content,
  Line,
  QuizContainer,
  ResultInfo,
  ResultItem,
  ResultScore,
  UserAvatar,
  UserEmail,
  UserInfo,
  UserName,
  UserResults,
  UserSection,
} from './QuizComponents';

type Props = {};

const QuizFinish = (props: Props) => {
  const user = getUser();
  const navigate = useNavigate();
  const { colors } = useTheme();
  const [isSaved, setIsSaved] = React.useState(false);
  const { quiz, answers, currentQuestion } = useAppSelector(
    (state) => state.quiz,
  );
  const totalQuiz = quiz?.Questions?.length;
  const correctAnswers = getCorrectAnswers(answers, quiz);

  const handleSave = () => {
    const savedResults = JSON.parse(
      localStorage.getItem('savedResults') || '[]',
    );
    setIsSaved(true);
    localStorage.setItem(
      'savedResults',
      JSON.stringify([
        ...savedResults,
        {
          id: Math.floor(Math.random() * 1000000),
          total: totalQuiz,
          correctAnswers,
          points: correctAnswers * 2,
          date: new Date(),
        },
      ]),
    );
  };

  const alertUser = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = 'Test1';
  };

  React.useEffect(() => {
    if (!Object.entries(currentQuestion).length) {
      navigate('/');
    }

    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);

  return (
    <QuizContainer>
      <Content>
        <UserSection>
          <UserInfo>
            <UserName>{user.FullName}</UserName>
            <UserEmail>
              {user.Email ? user.Email : 'unknown@gmail.com'}
            </UserEmail>
          </UserInfo>
          <UserAvatar>{user.FullName.slice(0, 1)}</UserAvatar>
        </UserSection>
        <UserResults>
          <ResultItem>
            <ResultScore>{totalQuiz}</ResultScore>
            <ResultInfo>total</ResultInfo>
          </ResultItem>
          <Line />
          <ResultItem>
            <ResultScore>{correctAnswers}</ResultScore>
            <ResultInfo>correct</ResultInfo>
          </ResultItem>
          <Line />
          <ResultItem>
            <ResultScore>{correctAnswers * 2}</ResultScore>
            <ResultInfo>points</ResultInfo>
          </ResultItem>
          <Line />
        </UserResults>
        <Button bgColor={colors.green} onClick={handleSave} disabled={isSaved}>
          {isSaved ? 'SAVED' : 'SAVE'}
        </Button>
      </Content>
    </QuizContainer>
  );
};

export default QuizFinish;
