import Button from '@/components/Button';
import { useAppSelector } from '@/utils/hooks/redux';
import React, { ChangeEvent, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { useQuiz } from './hooks/useQuiz';
import {
  Content,
  Fields,
  Form,
  QuizContainer,
  RadioInput,
  Title,
} from './QuizComponents';

type Props = {};

const QuizStep = (props: Props) => {
  const { setAnswer } = useQuiz();
  const { colors } = useTheme();
  const { currentQuestion } = useAppSelector((state) => state.quiz);
  const [selectedOption, setSelectedOption] = React.useState<string | null>(
    null,
  );
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    setAnswer(selectedOption as string);
  };

  const alertUser = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = 'Test';
  };

  React.useEffect(() => {
    if (!Object.entries(currentQuestion).length) {
      navigate('/');
    }

    window.addEventListener('beforeunload', alertUser);
    return () => {
      window.removeEventListener('beforeunload', alertUser);
    };
  }, []);

  return (
    <QuizContainer>
      <Content>
        <Title as={'h3'}>{currentQuestion.Text}</Title>
        <Form onSubmit={handleSubmit}>
          {Object.entries(currentQuestion).length &&
            currentQuestion.Options.map((opt) => (
              <Fields key={opt.Id}>
                <RadioInput
                  type="radio"
                  name="question_variant"
                  id={'opt' + opt.Id}
                  value={opt.Id}
                  onChange={handleChange}
                />
                <label htmlFor={'opt' + opt.QuestionId}>{opt.Text}</label>
              </Fields>
            ))}
          <Button bgColor={colors.green} disabled={!selectedOption}>
            Next
          </Button>
        </Form>
      </Content>
    </QuizContainer>
  );
};

export default QuizStep;
