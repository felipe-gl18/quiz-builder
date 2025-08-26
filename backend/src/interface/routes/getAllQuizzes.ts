import { Router } from "express";
import { PrismaQuizRepository } from "../../infrastructure/persistence/PrismaQuizRepository.js";
import { GetAllQuizzesUseCase } from "../../application/useCases/getAllQuizzes.js";
import { GetAllQuizzesController } from "../controllers/getAllQuizzes.js";
import { PrismaClient } from "../../generated/prisma/index.js";

const route = Router();

const client = new PrismaClient();
const prismaQuizRepository = new PrismaQuizRepository(client);
const getAllQuizzesUseCase = new GetAllQuizzesUseCase(prismaQuizRepository);
const getAllQuizzesController = new GetAllQuizzesController(
  getAllQuizzesUseCase
);

route.get("/quizzes", (req, res) => getAllQuizzesController.handle(req, res));

export { route as getAllQuizzesRoute };
