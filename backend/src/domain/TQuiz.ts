import { TQuestion } from "./TQuestion.js";

export type TQuiz = {
  uuid?: string;
  title: string;
  questions: TQuestion[];
  createdAt: Date;
};
