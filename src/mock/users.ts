import { User } from "../types/auth";

interface MockUser extends User {
  password: string;
}

export const users: MockUser[] = [
  {
    id: 1,
    name: "Raymund Baculi",
    clientid: "smileys123",
    password: "123456",
    role: "client",
  },
  {
    id: 2,
    name: "Matsbab User",
    clientid: "metsbab123",
    password: "123456",
    role: "client",
  },
];
