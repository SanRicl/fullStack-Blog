import prisma from "./prisma";

export const api = {
  getAllUsers: async (page: number) => {
    //Math for pagination
    //post per page
    let take = 5;

    //offset of items
    let skip = 0;

    if (page) {
      skip = (page - 1) * take;
    }

    const users = await prisma.user.findMany({
      //pagination  properties
      skip,
      take,
      where: {
        active: true,
      },
      //return only the selected fields bellow
      select: {
        id: true,
        name: true,
        email: true,
        active: true,
      },
      //order data
      // orderBy:{
      //   id: 'asc'
      // }
    });

    return users;
  },

  addUser: async (name: string, email: string) => {
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    
    return newUser;
  },

  getUser: async (id: number) => {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  },

  updateUser: async (id: number, name?: string, active?: string) => {
    //typying data to have optional parameters
    let data: {
      name?: string;
      active?: boolean;
    } = {};

    //if name beeing passed, name will be updated
    if (name) data.name = name;

    //if active beeing passed, active will be updated
    if (active) {
      switch (active) {
        case "true":
        case "1":
          data.active = true;
          break;
        case "false":
        case "0":
          data.active = false;
          break;
        default:
          break;
      }
    }
    //updating user into database
    const updatedUser = await prisma.user.update({
      where: { id },
      data,
    });

    return updatedUser;
  },

  deleteUser: async (id: number) => {
    const deletedUser = await prisma.user.delete({
      where: { id },
    });

    return deletedUser;
  },
};
