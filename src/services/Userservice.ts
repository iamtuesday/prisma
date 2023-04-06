import { User } from '../models/User';
import { prisma } from '../db/client';

// export const getUsers = async (): Promise<User[]> => {
//   const users = await prisma.user.findMany();
//   return users;
// };

// export const getUserById = async (id: number): Promise<User | null> => {
//   const user = await prisma.user.findUnique({ where: { id } });
//   return user;
// }