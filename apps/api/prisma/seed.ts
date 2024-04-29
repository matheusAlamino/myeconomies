import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seeds/users';
import { seedCategories } from './seeds/categories';

async function main() {
  console.log('Starting seed process...');

  const prismaClient = new PrismaClient({
    log: ['query', 'info', 'warn', 'error'],
  });

  console.log('Starting seed users process...');
  await seedUsers(prismaClient);
  console.log('Seed users process completed.');

  console.log('Starting seed categories process...');
  await seedCategories(prismaClient);
  console.log('Seed categories process completed.');
}

main();
