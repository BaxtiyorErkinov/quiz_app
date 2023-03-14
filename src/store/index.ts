import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { quizSlice } from './slices/Quiz.slice';

export const rootReducer = combineReducers({
  quiz: quizSlice.reducer,
});

export const setupStore = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof setupStore.getState>;
export type AppDispath = typeof setupStore.dispatch;
