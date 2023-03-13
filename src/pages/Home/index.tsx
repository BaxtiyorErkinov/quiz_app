import Quizzes from '@/components/Quizzes';
import mainApi from '@/lib/axios/mainApi';
import { getUser } from '@/utils/getUser';
import React from 'react';
import { useTheme } from 'styled-components';
import { useQuizzes } from './hooks/useQuizzes';

const Home = () => {
  const [quizzes, loading] = useQuizzes();

  return (
    <div>
      <Quizzes quizzes={quizzes} loading={loading} />
    </div>
  );
};

export default Home;
