import mainApi from '@/lib/axios/mainApi';
import { AxiosError } from 'axios';
import React from 'react';
import { IQuizzes } from '@/models/IQuiz';

type IQuizzesFn = [IQuizzes[], boolean];

export const useQuizzes = (): IQuizzesFn => {
  const [quizzes, setQizzes] = React.useState<IQuizzes[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleGetQizzes = async () => {
    try {
      setLoading(true);
      const res = await mainApi.get<IQuizzes[]>('api/quiz');
      if (res.status === 200) {
        setQizzes(res.data);
      }
    } catch (err) {
      const errMess = err as AxiosError;
      console.log(errMess.response?.data || 'error');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    handleGetQizzes();
  }, []);

  return [quizzes, loading];
};
