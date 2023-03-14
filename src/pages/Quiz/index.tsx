import Button from '@/components/Button';
import Loader from '@/components/Loader';
import Notfound from '@/components/Notfound';
import React from 'react';
import { useTheme } from 'styled-components';
import { useQuiz } from './hooks/useQuiz';
import {
  Content,
  Description,
  Instruction,
  Instructions,
  QuizContainer,
  Title,
} from './QuizComponents';

const Quiz = () => {
  const { error, loading, quiz, beginQuiz } = useQuiz();
  const { colors } = useTheme();
  const LengthOfQuestions = quiz?.Questions?.length;

  if (loading) {
    return (
      <QuizContainer>
        <Loader />
      </QuizContainer>
    );
  }

  if (error) {
    return (
      <QuizContainer>
        <Notfound message="Something went error" error={true} />
      </QuizContainer>
    );
  }

  return (
    <QuizContainer>
      <Content>
        <Title>{quiz.Title}</Title>
        <Description>{quiz.Description}</Description>
        <Title>Instructions</Title>
        <Instructions>
          <Instruction>
            This quiz consists of {LengthOfQuestions} multiple-choice questions.
            To be successful with the quizzes, it’s important to conversant with
            the topics.
          </Instruction>
          <Instruction>
            To start, click the "Start" button. When finished, click the "Submit
            " button.
          </Instruction>
        </Instructions>
        <Button
          bgColor={colors.green}
          onClick={beginQuiz}
          disabled={!LengthOfQuestions}>
          {!LengthOfQuestions ? 'Questions not found' : 'Start'}
        </Button>
      </Content>
    </QuizContainer>
  );
};

export default Quiz;
