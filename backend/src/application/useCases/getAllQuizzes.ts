import { TQuiz } from "../../domain/TQuiz.js";
import { PrismaQuizRepository } from "../../infrastructure/persistence/PrismaQuizRepository.js";

export class GetAllQuizzesUseCase {
  constructor(private readonly quizRepository: PrismaQuizRepository) {}
  async execute(): Promise<TQuiz[]> {
    return await this.quizRepository.findAll();
  }
}
