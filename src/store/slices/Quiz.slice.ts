import { IAnswer, IQuiz, IQuizQuestion } from '@/models/IQuiz';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getQuizThunk } from '../thunks/Quiz.thunk';

interface IState {
  quiz: IQuiz;
  loading: boolean;
  error: string;
  lastFinishedIdx: number;
  currentQuestion: IQuizQuestion;
  currentQuestionIdx: null | number;
  answers: IAnswer[];
}

const initialState: IState = {
  quiz: {} as IQuiz,
  currentQuestion: {} as IQuizQuestion,
  currentQuestionIdx: null,
  lastFinishedIdx: 0,
  answers: [],
  loading: false,
  error: '',
};

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    startQuiz: (state) => {
      const question = state.quiz.Questions[0];
      state.currentQuestion = question;
      state.currentQuestionIdx = 0;
    },
    setNextStep: (state) => {
      const { currentQuestion, quiz } = state;
      const currentQuestionID = currentQuestion.Id;
      const lastQuestionID = quiz.Questions[quiz.Questions.length - 1].Id;

      if (currentQuestionID !== lastQuestionID) {
        state.currentQuestionIdx = (state.currentQuestionIdx as number) + 1;
        state.currentQuestion = quiz.Questions[state.currentQuestionIdx];
      }
    },
    setAnswers: (state, { payload }: PayloadAction<IAnswer>) => {
      state.answers.push(payload);
    },

    resetQuiz: (state) => (state = initialState),
  },
  extraReducers: (builder) => {
    builder.addCase(getQuizThunk.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getQuizThunk.rejected, (state) => {
        state.loading = false;
      });
    builder.addCase(getQuizThunk.fulfilled, (state, action) => {
      state.loading = false;
      state.quiz = action.payload;
    });
  },
});

export const { startQuiz, setAnswers, setNextStep, resetQuiz } =
  quizSlice.actions;
