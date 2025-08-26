import { TQuiz } from "../../domain/TQuiz.js";
import { PrismaQuizRepository } from "../../infrastructure/persistence/PrismaQuizRepository.js";

export class GetQuizUseCase {
  constructor(private readonly quizRepository: PrismaQuizRepository) {}
  async execute(uuid: string): Promise<TQuiz | null> {
    return await this.quizRepository.findById(uuid);
  }
}
