import { PrismaQuizRepository } from "../../infrastructure/persistence/PrismaQuizRepository.js";

export class DeleteQuizUseCase {
  constructor(private readonly quizRepository: PrismaQuizRepository) {}
  async execute(uuid: string) {
    await this.quizRepository.delete(uuid);
  }
}
