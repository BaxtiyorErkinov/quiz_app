import React from 'react';
import {
  QuizzesList,
  QuizzesListItem,
  QuizzesListItemContent,
  QuizzesListItemDesc,
  QuizzesListItemFavorite,
  QuizzesListItemLine,
  QuizzesListItemTitle,
} from './QuizzesComponents';

import { BsBookmark, BsFillBookmarkFill } from 'react-icons/bs';
import { IQuizzes } from '@/models/IQuiz';
import { getFavoriteQuizzes } from '@/utils/getFavoriteQuizzes';
import Notfound from '../Notfound';
import Loader from '../Loader';

type IQuizzesProps = {
  quizzes: IQuizzes[];
  loading?: boolean;
};

const Quizzes: React.FC<IQuizzesProps> = ({ quizzes, loading = false }) => {
  const favQuizzes = getFavoriteQuizzes();
  const [counter, setCounter] = React.useState(1);

  const handleAddToFavorites = (quiz: IQuizzes) => {
    setCounter((pre) => pre + 1);
    if (favQuizzes.length) {
      const found = favQuizzes.findIndex((q) => q.id === quiz.id);
      if (found !== -1) {
        favQuizzes.splice(found, 1);
      } else {
        favQuizzes.push(quiz);
      }
    } else {
      favQuizzes.push(quiz);
    }
    localStorage.setItem('favoriteQuizzes', JSON.stringify(favQuizzes));
  };

  const isFavoriteQuiz = (quiz: IQuizzes): string => {
    const found = favQuizzes.findIndex((q) => q.id === quiz.id);
    if (found > -1) {
      return 'active';
    }
    return '';
  };

  if (loading) {
    return (
      <QuizzesList>
        <Loader />
      </QuizzesList>
    );
  }

  return (
    <div>
      <QuizzesList>
        {quizzes.length > 0 ? (
          quizzes.map((quiz) => (
            <QuizzesListItem key={quiz.id}>
              <QuizzesListItemLine />
              <QuizzesListItemContent>
                <QuizzesListItemTitle>{quiz.title}</QuizzesListItemTitle>
                <div style={{ overflow: 'hidden' }}>
                  <QuizzesListItemDesc>{quiz.description}</QuizzesListItemDesc>
                </div>
                <QuizzesListItemFavorite>
                  <BsFillBookmarkFill
                    className={isFavoriteQuiz(quiz)}
                    onClick={(e: React.SyntheticEvent) =>
                      handleAddToFavorites(quiz)
                    }
                  />
                </QuizzesListItemFavorite>
              </QuizzesListItemContent>
            </QuizzesListItem>
          ))
        ) : (
          <Notfound message="Quizzes not found" />
        )}
      </QuizzesList>
    </div>
  );
};

export default Quizzes;
