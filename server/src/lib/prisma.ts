import path from "path";

const clientPath = path.resolve(__dirname, "../../../db/generated/prisma/client");
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { PrismaClient } = require(clientPath);

const globalForPrisma = globalThis as unknown as {
  prisma: InstanceType<typeof PrismaClient> | undefined;
};

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}