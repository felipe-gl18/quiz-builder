import { randomUUID } from "crypto";
import { TQuiz } from "../../domain/TQuiz.js";
import { PrismaQuizRepository } from "../../infrastructure/persistence/PrismaQuizRepository.js";

export class CreateQuizUseCase {
  constructor(private readonly quizRepository: PrismaQuizRepository) {}
  async execute(quiz: TQuiz) {
    const uuid = randomUUID();
    await this.quizRepository.create({ ...quiz, uuid });
  }
}
