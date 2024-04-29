import { PrismaClient } from '@prisma/client';
import { users } from './data/users.json';

export async function seedUsers(prismaClient: PrismaClient) {
  console.log('Users data to seed', users);

  await prismaClient.$executeRawUnsafe(`TRUNCATE TABLE "User" CASCADE;`);
  await prismaClient.user.createMany({
    data: users.map((user) => ({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: new Date(),
      updatedAt: new Date(),
    })),
  });
}
