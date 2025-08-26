import { Router } from "express";
import { PrismaQuizRepository } from "../../infrastructure/persistence/PrismaQuizRepository.js";
import { GetQuizUseCase } from "../../application/useCases/getQuiz.js";
import { GetQuizController } from "../controllers/getQuiz.js";
import { PrismaClient } from "../../generated/prisma/index.js";

const route = Router();

const client = new PrismaClient();
const prismaQuizRepository = new PrismaQuizRepository(client);
const getQuizUseCase = new GetQuizUseCase(prismaQuizRepository);
const getQuizController = new GetQuizController(getQuizUseCase);

route.get("/quizzes/:id", (req, res) => getQuizController.handle(req, res));

export { route as getQuizRoute };
