import mainApi from '@/lib/axios/mainApi';
import { IQuiz } from '@/models/IQuiz';
import { createAsyncThunk } from '@reduxjs/toolkit';

type getQuizParams = {
  quizID: string | undefined;
};

export const getQuizThunk = createAsyncThunk(
  'getQuiz',
  async ({ quizID }: getQuizParams) => {
    try {
      const { data } = await mainApi.get<IQuiz>(`api/quiz/${quizID}`);
      return data;
    } catch (error) {
      throw error;
    }
  },
);
