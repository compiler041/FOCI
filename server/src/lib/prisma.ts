const { PrismaClient } = require('../../db/generated/prisma')

const globalForPrisma = globalThis as unknown as {
  prisma: any | undefined
}

export const prisma =
  globalForPrisma.prisma ?? new PrismaClient({
    datasource: {
      db: {
        url: process.env.DATABASE_URL
      }
    }
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma
}