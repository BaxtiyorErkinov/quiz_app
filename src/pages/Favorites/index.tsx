import Quizzes from '@/components/Quizzes';
import { getFavoriteQuizzes } from '@/utils/getFavoriteQuizzes';
import React from 'react';

const Favorites = () => {
  const favQuizzes = getFavoriteQuizzes();

  return (
    <div>
      <Quizzes quizzes={favQuizzes} />
    </div>
  );
};

export default Favorites;
