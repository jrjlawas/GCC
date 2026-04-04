import { User } from "../types/auth";

interface MockUser extends User {
  password: string;
}

export const users: MockUser[] = [
  {
    id: 1,
    nickname: "Raymund",
    firstname: "Raymund",
    lastname: "Baculli",
    clientid: "smileys123",
    password: "123456",
    role: "client",
  },
  {
    id: 2,
    nickname: "Mestbab",
    firstname: "Sample",
    lastname: "Sample",
    clientid: "metsbab123",
    password: "123456",
    role: "client",
  },
  {
    id: 3,
    nickname: "Jay Romel",
    firstname: "Jay Romel",
    lastname: "Lawas",
    clientid: "JRLawas12",
    password: "123456",
    role: "GCC",
  },
  {
    id: 4,
    nickname: "Ana Marie",
    firstname: "Ana Marie",
    lastname: "Ranolas",
    clientid: "Anan123",
    password: "123456",
    role: "GCC",
  },
];
