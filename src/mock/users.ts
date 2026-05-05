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
    email: "jayromellawas30@gmail.com",
    clientid: "smileys123",
    password: "123456",
    role: "client",
  },
  {
    id: 2,
    nickname: "Mestbab",
    firstname: "Sample",
    lastname: "Sample",
    email: "jayromellawas30@gmail.com",
    clientid: "metsbab123",
    password: "123456",
    role: "client",
  },
  {
    id: 3,
    nickname: "Jay Romel",
    firstname: "Jay Romel",
    lastname: "Lawas",
    email: "jayromellawas30@gmail.com",
    clientid: "JRLawas12",
    password: "123456",
    role: "GCC",
  },
];
