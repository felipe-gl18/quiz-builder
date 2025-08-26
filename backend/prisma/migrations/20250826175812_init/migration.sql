-- CreateTable
CREATE TABLE "public"."Quiz" (
    "uuid" UUID NOT NULL,
    "title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Quiz_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "public"."Question" (
    "uuid" UUID NOT NULL,
    "quizId" UUID NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("uuid")
);

-- CreateTable
CREATE TABLE "public"."Answer" (
    "uuid" UUID NOT NULL,
    "questionId" UUID NOT NULL,
    "text" TEXT NOT NULL,

    CONSTRAINT "Answer_pkey" PRIMARY KEY ("uuid")
);

-- AddForeignKey
ALTER TABLE "public"."Question" ADD CONSTRAINT "Question_quizId_fkey" FOREIGN KEY ("quizId") REFERENCES "public"."Quiz"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."Answer" ADD CONSTRAINT "Answer_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "public"."Question"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
