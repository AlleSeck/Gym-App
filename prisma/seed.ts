import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Création d'un faux utilisateur
  const user: User = await prisma.user.upsert({
    where: { email: 'testx@example.com'},
    update: {},
    create: {
      email: 'testx@example.com',
      password: 'motdepasse123',
      name: 'Faux Utilisateur'
    }
  });
  
  console.log('Faux utilisateur créé :', user);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
