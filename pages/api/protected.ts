import { NextApiHandler } from "next";
import { getSession } from "next-auth/react";

const handler: NextApiHandler = async (req, res) => {
  const session = await getSession({ req });

  if(!session) return res.json({message: 'Voce nao tem acesso a esta rota.'})
  
  res.json({ message: 'Rota acessivel' });
};

export default handler;
