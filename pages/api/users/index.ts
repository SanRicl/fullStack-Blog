import { NextApiHandler } from "next";
import { api } from "../../../libs/api";

const handlerGet: NextApiHandler = async (req, res) => {
  const { page } = req.query;

  const users = await api.getAllUsers(parseInt(page as string));

  res.status(200).json(users);
};

const handlerPost: NextApiHandler = async (req, res) => {
  const { name, email } = req.body;

   const newUser = await api.addUser(name, email).catch(() => {
      res.json({ message: "Usuario ja existe." });
    });

  if (newUser) {
    res.status(201).json(newUser);
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
