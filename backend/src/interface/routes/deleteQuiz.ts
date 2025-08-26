import { Router } from "express";
import { PrismaQuizRepository } from "../../infrastructure/persistence/PrismaQuizRepository.js";
import { DeleteQuizUseCase } from "../../application/useCases/deleteQuiz.js";
import { DeleteQuizController } from "../controllers/deleteQuiz.js";
import { PrismaClient } from "../../generated/prisma/index.js";

const route = Router();

const client = new PrismaClient();
const prismaQuizRepository = new PrismaQuizRepository(client);
const deleteQuizUseCase = new DeleteQuizUseCase(prismaQuizRepository);
const deleteQuizController = new DeleteQuizController(deleteQuizUseCase);

route.delete("/quizzes/:id", (req, res) =>
  deleteQuizController.handle(req, res)
);

export { route as deleteQuizRoute };
