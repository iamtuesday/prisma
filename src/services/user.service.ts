import { faker } from "@faker-js/faker"

 const createUserWithProfile = async () => {
    //create a user
    const user = await prisma.user.create({
    data: {}
    })

    //crate a profile
    const profile = await prisma.profile.create({
        data: {
            name: faker.name.firstName(),
            userId: user.id
        }
    })
}