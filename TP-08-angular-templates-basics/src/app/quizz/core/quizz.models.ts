export interface Quizz {
  question: string;
  answers: QuizzAnswer[];
}

export interface QuizzAnswer {
  answer: string;
  isCorrect: boolean;
}
