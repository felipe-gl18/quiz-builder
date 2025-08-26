import { Request, Response } from "express";
import { DeleteQuizUseCase } from "../../application/useCases/deleteQuiz.js";

export class DeleteQuizController {
  constructor(private readonly deleteQuizUseCase: DeleteQuizUseCase) {}
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    try {
      await this.deleteQuizUseCase.execute(id);
      return response.status(204).send();
    } catch (error) {
      return response.status(400).json({ error: (error as Error).message });
    }
  }
}
