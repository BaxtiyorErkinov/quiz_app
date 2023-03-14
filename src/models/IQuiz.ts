export interface IQuizzes {
  id: number;
  title: string;
  description: string;
}

export interface IQuiz {
  Description: string;
  Id: number;
  Questions: IQuizQuestion[];
  Title: string;
}

export interface IQuizQuestion {
  Id: number;
  Options: IQuestionOption[];
  QuizId: number;
  Text: string;
}

export interface IQuestionOption {
  Id: number;
  IsCorrect: boolean;
  QuestionId: number;
  Text: string;
}

export interface IAnswer {
  questionId: number;
  optionId: number;
}
