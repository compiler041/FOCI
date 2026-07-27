-- AlterTable
ALTER TABLE "User" ADD COLUMN     "strictnessLevel" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "totalFocusSeconds" INTEGER NOT NULL DEFAULT 0;
