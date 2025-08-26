import { Request, Response } from "express";
import { GetAllQuizzesUseCase } from "../../application/useCases/getAllQuizzes.js";

export class GetAllQuizzesController {
  constructor(private readonly getAllQuizzesUseCase: GetAllQuizzesUseCase) {}
  async handle(request: Request, response: Response) {
    try {
      const quizzes = await this.getAllQuizzesUseCase.execute();
      return response.status(200).json(quizzes);
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}
