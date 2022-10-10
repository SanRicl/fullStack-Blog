import NextAuth from "next-auth";
import { AuthUser } from "./AuthUser";
//declarando o tipo do usuario para auth
declare module "next-auth" {
  interface Session {
    user: AuthUser;
  }
}
