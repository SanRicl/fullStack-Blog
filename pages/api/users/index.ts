import { NextApiHandler } from "next";
import prisma from "../../../libs/prisma";

const handlerGet: NextApiHandler = async (req, res) => {
  const { page } = req.query;

  //Math for pagination
  //post per page
  let take = 5;

  //offset of items
  let skip = 0;

  if (page) {
    skip = (parseInt(page as string) - 1) * take;
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

  res.status(200).json(users);
};

const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email } = req.body;

  const newUser = await prisma.user
    .create({
      data: {
        name,
        email,
      },
    })
    .catch(() => {
      res.json({ message: "Usuario ja existe." });
    });

  if (newUser) {
    res.status(201).json({ user: newUser });
  }
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
      break;
    case "POST":
      handlerPost(req, res);
      break;
    default:
      break;
  }
};

export default handler;
