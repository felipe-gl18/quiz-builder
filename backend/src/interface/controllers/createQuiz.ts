import { Request, Response } from "express";
import { CreateQuizUseCase } from "../../application/useCases/createQuiz.js";

export class CreateQuizController {
  constructor(private readonly createQuizUseCase: CreateQuizUseCase) {}
  async handle(request: Request, response: Response) {
    const quizData = request.body;
    try {
      await this.createQuizUseCase.execute(quizData);
      return response.status(201).send();
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}
