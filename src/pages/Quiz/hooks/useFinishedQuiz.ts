import mainApi from '@/lib/axios/mainApi';
import { getUser } from '@/utils/getUser';
import { useAppSelector } from '@/utils/hooks/redux';
import { AxiosError } from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';

export interface IResult {
  userId: string;
  quizId: number;
  score: number;
  id: number;
}

interface IFinishedQRes {
  result: IResult;
  loading: boolean;
}

export const useFinishedQuiz = (): IFinishedQRes => {
  const user = getUser();
  const { answers } = useAppSelector((state) => state.quiz);
  const { quizID } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [result, setResult] = React.useState<IResult>({} as IResult);

  const getQuizResult = async () => {
    try {
      setLoading(true);
      const { status, data } = await mainApi.post(
        `api/Results?UserId=${user.UserId}&QuizId=${quizID}`,
        answers,
      );

      if (status === 200) {
        setResult(data);
      }

      console.log(status, data);
    } catch (e) {
      const err = e as AxiosError;
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getQuizResult();
  }, []);

  return {
    loading,
    result,
  };
};
