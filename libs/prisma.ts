//lembrar de sempre reiniciar o projeto para as atualizacoes terem efeito

//instancia de conexao com o BD, ao importar, importa automaticamente a estrutura do prisma para o BD
import { PrismaClient } from "@prisma/client";

//config para evitar server connection limit 

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient();


if(process.env.NODE_ENV !== 'production'){
    global.prisma = prisma
}

export default prisma


//so se conecta com o banco de dados ao rodar o comando npm run dev