// eslint-disable-next-line @typescript-eslint/no-require-imports
require("dotenv").config();

export default {
  schema: "./prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL,
  },
};