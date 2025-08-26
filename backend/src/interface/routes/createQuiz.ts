import { Router } from "express";
import { CreateQuizController } from "../controllers/createQuiz.js";
import { CreateQuizUseCase } from "../../application/useCases/createQuiz.js";
import { PrismaQuizRepository } from "../../infrastructure/persistence/PrismaQuizRepository.js";
import { PrismaClient } from "../../generated/prisma/index.js";

const route = Router();

const client = new PrismaClient();
const prismaQuizRepository = new PrismaQuizRepository(client);
const createQuizUseCase = new CreateQuizUseCase(prismaQuizRepository);
const createQuizController = new CreateQuizController(createQuizUseCase);

route.post("/quizzes", (req, res) => createQuizController.handle(req, res));

export { route as createQuizRoute };
