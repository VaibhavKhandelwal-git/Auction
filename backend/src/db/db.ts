
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.js";

const connectDB = async () => {
  try {
    const adapter = new PrismaPg({
      connectionString: process.env.DATABASE_URL!,
    });

    const prisma = new PrismaClient({ adapter });

    await prisma.$connect();

    console.log("PostgreSQL connected successfully");

    return prisma;
  } catch (error) {
    console.error("Error connecting to PostgreSQL:", error);
    process.exit(1);
  }
};

export default connectDB;
