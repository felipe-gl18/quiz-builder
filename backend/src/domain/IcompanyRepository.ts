import { TQuiz } from "./TQuiz.js";

export interface IQuizRepository {
  create(quiz: TQuiz): Promise<void>;
  findById(uuid: string): Promise<TQuiz | null>;
  findAll(): Promise<TQuiz[]>;
  delete(uuid: string): Promise<void>;
}
