import { IAnswer, IQuiz } from '@/models/IQuiz';

export function getCorrectAnswers(answers: IAnswer[], quiz: IQuiz) {
  const allQuestions = quiz.Questions;
  let res = 0;
  for (let i = 0; i < allQuestions?.length; i++) {
    for (let j = 0; j < allQuestions[i]?.Options?.length; j++) {
      if (
        allQuestions[i].Options[j].Id === answers[i].optionId &&
        allQuestions[i].Options[j].IsCorrect === true
      ) {
        res++;
      }
    }
  }

  return res;
}
