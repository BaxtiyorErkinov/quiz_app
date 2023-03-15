import mainApi from '@/lib/axios/mainApi';
import { IQuizzes } from '@/models/IQuiz';
import { AxiosError } from 'axios';
import React from 'react';

export interface IQuizOptions {
  title: string;
  id: number;
}

export interface ILeaderboard {
  email: string;
  fullName: string;
  score: number;
}

interface IMakeQuizReturn {
  leaderboard: ILeaderboard[];
  quizOptions: IQuizOptions[] | null;
  setSelectedOption: (arg: IQuizOptions[keyof IQuizOptions]) => void;
  loading: boolean;
}

const makeQuizOptions = (data: IQuizzes[]): IQuizOptions[] => {
  const res: IQuizOptions[] = [];

  for (let i = 0; i < data.length; i++) {
    res.push({
      id: data[i].id,
      title: data[i].title,
    });
  }

  return res;
};

export const useLeaderboard = (): IMakeQuizReturn => {
  const [quizOptions, setQuizOptions] = React.useState<IQuizOptions[] | null>(
    null,
  );
  const [selectedOption, setSelectedOption] = React.useState<
    number | string | null
  >(null);
  const [leaderboard, setLeaderboard] = React.useState<ILeaderboard[]>([]);
  const [loading, setLoading] = React.useState(false);

  const getQuizOptions = async () => {
    try {
      const res = await mainApi.get<IQuizzes[]>('api/quiz');
      if (res.status === 200) {
        const result = makeQuizOptions(res.data);
        setQuizOptions(result);
      }
    } catch (err) {
      const errMess = err as AxiosError;
      console.error(errMess);
    }
  };

  const getLeaderboard = async () => {
    try {
      setLoading(true);
      const { status, data } = await mainApi.get<ILeaderboard[]>(
        'api/Leaderboards/' + selectedOption,
      );
      if (status === 200) {
        setLeaderboard(data);
      }
    } catch (err) {
      const errMess = err as AxiosError;
      console.error(errMess);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    getQuizOptions();
  }, []);

  React.useEffect(() => {
    if (selectedOption) {
      getLeaderboard();
    }
  }, [selectedOption]);

  return {
    setSelectedOption,
    quizOptions,
    leaderboard,
    loading,
  };
};
