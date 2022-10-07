import { NextApiHandler } from "next";
import { api } from "../../../libs/api";

const handlerGet: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const user = await api.getUser(parseInt(id as string));

  if (user) return res.status(200).json({ user });

  res.status(404).json({ error: "Usuario nao encontrado" });
};

const handlerPut: NextApiHandler = async (req, res) => {
  //data that is comming from the inputs
  const { name, active } = req.body;

  //id of the user that is beeing passed through the query
  const { id } = req.query;

  const updatedUser = await api.updateUser(
    parseInt(id as string),
    name,
    active
  );

  //if user is updated, returning this user
  if (updatedUser) return res.json(updatedUser);

  //else, returning a message informing thats not possible to update the user
  return res
    .status(400)
    .json("Nao foi possivel alterar os dados deste usuario.");
};

const handlerDelete: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  await api.deleteUser(parseInt(id as string)).catch(() => {
    /*if doesnt delete a user, it will enter in this case and wont do anything. This is usefull when you dont want to inform the client when something whent wrong*/
  });

  return res.json({ message: "Usuario Deletado." });
};

const handler: NextApiHandler = (req, res) => {
  switch (req.method) {
    case "GET":
      handlerGet(req, res);
      break;
    case "PUT":
      handlerPut(req, res);
      break;
    case "DELETE":
      handlerDelete(req, res);
      break;
    default:
      break;
  }
};

export default handler;
