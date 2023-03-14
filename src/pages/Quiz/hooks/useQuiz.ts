import { IQuiz } from '@/models/IQuiz';
import { setAnswers, setNextStep, startQuiz } from '@/store/slices/Quiz.slice';
import { getQuizThunk } from '@/store/thunks/Quiz.thunk';
import { useAppDispatch, useAppSelector } from '@/utils/hooks/redux';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type useQuizParams = {
  error: string;
  loading: boolean;
  quiz: IQuiz;
  beginQuiz: () => void;
  setAnswer: (option: string) => void;
};

export const useQuiz = (): useQuizParams => {
  const { quizID } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, loading, quiz, currentQuestion } = useAppSelector(
    (state) => state.quiz,
  );

  const beginQuiz = () => {
    dispatch(startQuiz());
    navigate(`/quiz/${quizID}/step`);
  };

  const setAnswer = (option: string) => {
    const currentQuestionID = currentQuestion.Id;
    const lastQuestionID = quiz.Questions[quiz.Questions.length - 1].Id;

    console.log('@@@@', currentQuestionID, lastQuestionID);

    if (currentQuestionID !== lastQuestionID) {
      dispatch(
        setAnswers({
          optionId: +option,
          questionId: currentQuestion.Id,
        }),
      );
      dispatch(setNextStep());
      return;
    }

    dispatch(
      setAnswers({
        optionId: +option,
        questionId: currentQuestion.Id,
      }),
    );

    navigate(`/quiz/${quizID}/finish`);
  };

  React.useEffect(() => {
    if (!Object.entries(quiz).length) {
      dispatch(getQuizThunk({ quizID: quizID }));
    }
  }, []);

  return {
    error,
    loading,
    quiz,
    beginQuiz,
    setAnswer,
  };
};
