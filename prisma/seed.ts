// import { PrismaClient } from '@prisma/client'

// const prisma = new PrismaClient()

// async function main() {
//   await prisma.author.create({ 
//     data: {
//       name: 'Alice',
//       id: 1,
//       posts: {},
//       },
//     })
//   }
  
//   main()
//     .then(() => prisma.$disconnect())
//     .catch(async (e) => {
//       console.error(e);
//       await prisma.$disconnect();
//       process.exit(1);
//  });