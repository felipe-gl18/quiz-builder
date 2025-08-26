import { PrismaClient } from "@prisma/client";
import { IQuizRepository } from "../../domain/IcompanyRepository.js";
import { TQuiz } from "../../domain/TQuiz.js";
import { TQuestion } from "../../domain/TQuestion.js";

export class PrismaQuizRepository implements IQuizRepository {
  constructor(private readonly prisma: PrismaClient) {}

  async create(quiz: TQuiz): Promise<void> {
    const data = {
      uuid: quiz.uuid,
      title: quiz.title,
      questions: {
        create: quiz.questions.map((question) => ({
          title: question.title,
          type: question.type,
          options: {
            create: question.options.map((option) => ({
              text: option.text,
            })),
          },
        })),
      },
    };
    await this.prisma.quiz.create({
      data,
    });
  }
  async delete(uuid: string): Promise<void> {
    // filtering all the questions belonging to the quiz
    const questions = await this.prisma.question.findMany({
      where: { quizId: uuid },
      select: { id: true },
    });

    const questionIds = questions.map((q: TQuestion) => q.id);

    // 1. deleting all answers
    await this.prisma.option.deleteMany({
      where: { questionId: { in: questionIds } },
    });

    // 2. deleting all questions
    await this.prisma.question.deleteMany({
      where: { quizId: uuid },
    });

    // 3. deleting the quiz
    await this.prisma.quiz.delete({
      where: { uuid },
    });
  }
  async findAll(): Promise<TQuiz[]> {
    return this.prisma.quiz.findMany({
      select: {
        uuid: true,
        title: true,
        createdAt: true,
        _count: {
          select: { questions: true }, // this will return the amount of questions
        },
      },
    });
  }
  async findById(uuid: string): Promise<TQuiz | null> {
    return this.prisma.quiz.findUnique({
      where: { uuid },
      include: {
        questions: {
          include: {
            options: true,
          },
        },
      },
    });
  }
}
