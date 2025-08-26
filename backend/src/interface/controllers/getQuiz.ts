import { Request, Response } from "express";
import { GetQuizUseCase } from "../../application/useCases/getQuiz.js";

export class GetQuizController {
  constructor(private readonly getQuizUseCase: GetQuizUseCase) {}
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    try {
      const quiz = await this.getQuizUseCase.execute(id);
      return response.status(200).json(quiz);
    } catch (error) {
      return response.status(404).json({ error: (error as Error).message });
    }
  }
}
