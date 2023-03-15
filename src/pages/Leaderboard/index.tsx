import Loader from '@/components/Loader';
import Notfound from '@/components/Notfound';
import Select from '@/components/Select';
import TableMarkup from '@/components/Table';
import React from 'react';
import { IQuizOptions, useLeaderboard } from './hooks/useLeaderboard';
import {
  Container,
  Content,
  Header,
  HeaderTitle,
} from './LeaderboardComponents';

const Leaderboard = () => {
  const { quizOptions, setSelectedOption, leaderboard, loading } =
    useLeaderboard();

  return (
    <Container>
      <Header>
        <HeaderTitle>Leaderboard</HeaderTitle>
        <Select
          options={quizOptions as IQuizOptions[]}
          value={'id'}
          renderText={'title'}
          onChange={(e) => {
            setSelectedOption(e);
          }}
        />
      </Header>
      <Content>
        {loading ? (
          <Loader />
        ) : (
          <>
            {leaderboard.length ? (
              <TableMarkup
                data={leaderboard}
                titles={Object.keys(leaderboard[0])}></TableMarkup>
            ) : (
              <Notfound message="Leaderboard not found" />
            )}
          </>
        )}
      </Content>
    </Container>
  );
};

export default Leaderboard;
