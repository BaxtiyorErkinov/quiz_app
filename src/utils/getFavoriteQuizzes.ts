import { IQuizzes } from '@/models/IQuiz';

export const getFavoriteQuizzes = (): IQuizzes[] => {
  return JSON.parse(
    localStorage.getItem('favoriteQuizzes') || '[]',
  ) as IQuizzes[];
};
