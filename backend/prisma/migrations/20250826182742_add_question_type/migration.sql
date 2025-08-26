-- CreateEnum
CREATE TYPE "public"."typeState" AS ENUM ('multiple_choice', 'true_false', 'short_answer');

-- AlterTable
ALTER TABLE "public"."Question" ADD COLUMN     "type" "public"."typeState" NOT NULL DEFAULT 'multiple_choice';
