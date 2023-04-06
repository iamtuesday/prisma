import { faker } from "@faker-js/faker";
import  {prisma} from "../db/client"
import { clean } from "../helpers/clean";

const createUserWithProfile = async () => {
    await clean()
  //create a user
  const user = await prisma.user.create({
    data: {},
  });

  //crate a profile
  const profile = await prisma.profile.create({
    data: {
      name: faker.name.firstName(),
      userId: user.id,
    },
  });

  const userOne = await prisma.user.findUnique({
    where: {
      id: user.id,
    },
    include: {
      profile: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  // 2. create a user with a profile
  const userTwo = await prisma.user.create({
    data: {
      profile: {
        create: {
          name: faker.name.firstName(),
        },
      },
    },
    include: {
      profile: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return { userOne, userTwo };
};

console.log(await createUserWithProfile());
