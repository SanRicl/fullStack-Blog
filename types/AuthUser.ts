import { Users } from "./Users";
export type AuthUser = Users & {
  role: string;
};
