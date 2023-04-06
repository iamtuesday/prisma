import { faker } from "@faker-js/faker";
import {prisma} from '../db/client'

export const createUser = () =>{
    return prisma.user.create({
        data: {
            profile: {
                create: {
                    name: faker.name.fullName(),
                }
            }
        }
    })
}