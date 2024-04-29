import { PrismaClient } from '@prisma/client';
import { categories } from './data/categories.json';

export async function seedCategories(prismaClient: PrismaClient) {
  console.log('Categories data to seed', categories);

  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "Category" CASCADE;`);
  await prismaClient.category.createMany({
    data: categories.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    })),
  });
}
